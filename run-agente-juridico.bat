@echo off
title 🤖 Agente Jurídico - Calculadora Trabalhista
chcp 65001 >nul

:: ===================================================
::  🤖 AGENTE JURÍDICO - Monitor Legal Automatizado
::  CalculadoraTrabalhista.com.br
::
::  USO:
::    run-agente-juridico.bat              - Verificar todas as fontes
::    run-agente-juridico.bat tst          - Apenas TST
::    run-agente-juridico.bat stf          - Apenas STF  
::    run-agente-juridico.bat planalto     - Apenas Planalto
::    run-agente-juridico.bat relatorio    - Apenas relatório
::    run-agente-juridico.bat --dry-run    - Simular sem alterar
:: ===================================================

cd /d "%~dp0"

echo.
echo ╔══════════════════════════════════════════════════╗
echo ║     🤖 AGENTE JURÍDICO - Iniciando...           ║
echo ║     CalculadoraTrabalhista.com.br               ║
echo ╚══════════════════════════════════════════════════╝
echo.

:: Garantir que logs existam
if not exist "logs" mkdir logs

:: Executar
node agente-juridico.mjs %*

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERRO: Agente jurídico falhou (código: %ERRORLEVEL%)
    echo    Verifique os logs em logs\
    echo    Verifique se OPENROUTER_API_KEY está configurada no .env
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ✅ Agente jurídico concluído com sucesso!
echo    Logs salvos em logs\
echo    Estado salvo em data\agente-estado.json
echo.
pause
