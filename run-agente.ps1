param(
    [switch]$Quiet
)

# =============================================
#  run-agente.ps1
#  Script autonômo para o Agente Redator 🤖
#  Gera post → integra → build → commit → push
#  Tudo automático, sem intervenção manual.
#
#  Task Scheduler:
#    powershell -ExecutionPolicy Bypass -File "run-agente.ps1"
# =============================================

$ErrorActionPreference = "Continue"
$projectDir   = "D:\direito-trabalhista"
$logDir       = Join-Path $projectDir "logs"
$logFile      = Join-Path $logDir "agente.log"

# ── Garantir diretório de log ──
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

# ── Rotação de log (max 5MB) ──
if (Test-Path $logFile) {
    $logSize = (Get-Item $logFile).Length
    if ($logSize -gt 5MB) {
        Move-Item $logFile "$logFile.old" -Force -ErrorAction SilentlyContinue
    }
}

function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMsg = "[$timestamp] $Message"
    if (-not $Quiet) { Write-Host $logMsg }
    Add-Content -Path $logFile -Value $logMsg
}

Write-Log "==================== INICIO ===================="
Write-Log "Projeto: $projectDir"

# 1. Navegar para o projeto
Set-Location $projectDir

# 2. Verificar se .env existe
if (-not (Test-Path ".env")) {
    Write-Log "ERRO: Arquivo .env nao encontrado!"
    exit 1
}

# 3. Git pull (evitar conflitos)
Write-Log "Git pull..."
git pull origin master 2>&1 | ForEach-Object { Write-Log "   $_" }
if ($LASTEXITCODE -ne 0) {
    Write-Log "AVISO: git pull falhou (sem internet?). Continuando..."
}

# 4. Executar o agente redator
Write-Log "Executando agente redator..."
$agentOutput = node agente-redator.mjs 2>&1
$agentExitCode = $LASTEXITCODE
foreach ($line in $agentOutput) { Write-Log "   $line" }

# 4b. Verificar se o agente executou com sucesso
if ($agentExitCode -ne 0) {
    Write-Log "ERRO: Agente redator falhou (exit code $agentExitCode). Abortando."
    Write-Log "==================== FIM (agente falhou) ===================="
    exit 1
}

# 5. Verificar se houve mudancas no git
$gitStatus = git status --porcelain
if ([string]::IsNullOrWhiteSpace($gitStatus)) {
    Write-Log "Nenhuma mudanca detectada (post ja existia ou API nao gerou novo conteudo)."
    Write-Log "==================== FIM (sem mudancas) ===================="
    exit 0
}

Write-Log "Mudancas detectadas!"
foreach ($line in ($gitStatus -split "`n")) { Write-Log "   [GIT] $line" }

# 6. Build do site
Write-Log "Executando build..."
$buildOutput = npm run build 2>&1
$buildExitCode = $LASTEXITCODE
foreach ($line in $buildOutput) {
    if ($line -match "error|ERROR|erro|ERRO|fail|FAIL") { Write-Log "   [BUILD] $line" }
}
if ($buildExitCode -ne 0) {
    Write-Log "ERRO: Build falhou (exit code $buildExitCode). Abortando commit."
    Write-Log "==================== FIM (build falhou) ===================="
    exit 1
}
Write-Log "Build OK! Sitemap atualizado."

# 7. Git add, commit e push
git add -A 2>&1 | Out-Null
$dateStr = Get-Date -Format "yyyy-MM-dd"
$commitMsg = "feat(blog): post automatico $dateStr"
git commit -m $commitMsg 2>&1 | ForEach-Object { Write-Log "   [COMMIT] $_" }

Write-Log "Enviando para GitHub..."
git push origin master 2>&1 | ForEach-Object { Write-Log "   [PUSH] $_" }
if ($LASTEXITCODE -eq 0) {
    Write-Log "Push OK! Deploy Vercel automatico acionado."
} else {
    Write-Log "AVISO: Push falhou. Tentando novamente..."
    Start-Sleep -Seconds 5
    git push origin master 2>&1 | ForEach-Object { Write-Log "   [PUSH] $_" }
}

Write-Log "==================== FIM (sucesso) ===================="
