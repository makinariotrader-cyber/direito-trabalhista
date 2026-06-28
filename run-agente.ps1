param(
    [switch]$Quiet
)

# =============================================
#  run-agente.ps1
#  Script autônomo para o Agente Redator 🤖
#  Gera post → integra → commit → push
#  Uso no Task Scheduler: powershell -ExecutionPolicy Bypass -File "run-agente.ps1"
# =============================================

$ErrorActionPreference = "Continue"
$projectDir = "D:\direito-trabalhista"
$logDir = Join-Path $projectDir "logs"
$logFile = Join-Path $logDir "agente.log"

# Garantir diretório de log
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

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

# 4. Executar o agente redator
Write-Log "Executando agente redator..."
$agentOutput = node agente-redator.mjs 2>&1
foreach ($line in $agentOutput) { Write-Log "   $line" }

# 5. Verificar se houve mudancas no git
$gitStatus = git status --porcelain
if ([string]::IsNullOrWhiteSpace($gitStatus)) {
    Write-Log "Nenhuma mudanca detectada. (post ja existia ou falha na geracao)"
    Write-Log "==================== FIM (sem mudancas) ===================="
    exit 0
}

Write-Log "Mudancas detectadas!"
Write-Log $gitStatus

# 6. Build do site
Write-Log "Executando build..."
$buildOutput = npm run build 2>&1
$buildOk = $LASTEXITCODE -eq 0
foreach ($line in $buildOutput) { 
    if ($line -match "error|ERROR|erro|ERRO") { Write-Log "   [BUILD] $line" }
}
if (-not $buildOk) {
    Write-Log "ERRO no build! Abortando commit."
    Write-Log "==================== FIM (build falhou) ===================="
    exit 1
}
Write-Log "Build OK!"

# 7. Git add, commit e push
git add -A 2>&1 | Out-Null
$dateStr = Get-Date -Format "yyyy-MM-dd"
$commitMsg = "feat(blog): post automatico $dateStr"
git commit -m $commitMsg 2>&1 | ForEach-Object { Write-Log "   [GIT] $_" }

Write-Log "Enviando para GitHub..."
git push origin master 2>&1 | ForEach-Object { Write-Log "   [PUSH] $_" }
Write-Log "Deploy Vercel automatico acionado!"

Write-Log "==================== FIM (sucesso) ===================="
