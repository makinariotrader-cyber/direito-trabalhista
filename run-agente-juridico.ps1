# ===================================================
#  🤖 AGENTE JURÍDICO - Monitor Legal Automatizado
#  CalculadoraTrabalhista.com.br
#
#  USO:
#    .\run-agente-juridico.ps1               - Verificar todas as fontes
#    .\run-agente-juridico.ps1 tst           - Apenas TST
#    .\run-agente-juridico.ps1 stf           - Apenas STF
#    .\run-agente-juridico.ps1 planalto      - Apenas Planalto
#    .\run-agente-juridico.ps1 relatorio     - Apenas relatório
#    .\run-agente-juridico.ps1 --dry-run     - Simular sem alterar
# ===================================================

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     🤖 AGENTE JURÍDICO - Iniciando...           ║" -ForegroundColor Cyan
Write-Host "║     CalculadoraTrabalhista.com.br               ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Garantir que logs existam
if (-not (Test-Path "logs")) {
    New-Item -ItemType Directory -Path "logs" | Out-Null
}

# Executar o agente
$args = $args -join " "
$command = "node agente-juridico.mjs $args"
Write-Host "> $command" -ForegroundColor Gray
Write-Host ""

$result = Invoke-Expression $command

if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne $null) {
    Write-Host ""
    Write-Host "❌ ERRO: Agente jurídico falhou (código: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "   Verifique os logs em logs\" -ForegroundColor Red
    Write-Host "   Verifique se OPENROUTER_API_KEY está configurada no .env" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "✅ Agente jurídico concluído com sucesso!" -ForegroundColor Green
Write-Host "   Logs salvos em logs\" -ForegroundColor Green
Write-Host "   Estado salvo em data\agente-estado.json" -ForegroundColor Green
Write-Host ""
Read-Host "Pressione Enter para sair"
