@echo off
REM Script para inicializar o projeto localmente
REM Requer Python instalado

echo ========================================
echo EM Solutions - Servidor Local
echo ========================================
echo.

REM Verificar se Python está instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Python não está instalado ou não está no PATH
    echo Instale Python de: https://www.python.org
    pause
    exit /b 1
)

echo [OK] Python encontrado
echo.

REM Iniciar servidor HTTP
echo Iniciando servidor em http://localhost:3000
echo Pressione CTRL+C para parar
echo.

python -m http.server 3000

pause
