@echo off
REM ==========================================
REM  run-agente.bat
REM  Chamado pelo Windows Task Scheduler
REM  Executa o PowerShell script de automacao
REM ==========================================
cd /d "D:\direito-trabalhista"

REM Garantir diretorio de log
if not exist "logs" mkdir "logs"

REM Executar PowerShell script com log
powershell -ExecutionPolicy Bypass -File "run-agente.ps1" >> "logs\agente.log" 2>&1
