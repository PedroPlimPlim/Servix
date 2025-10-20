@echo off
echo ========================================
echo    CORRIGINDO PROBLEMAS - SERVIX WEB
echo ========================================
echo.

echo [1/4] Limpando cache e node_modules...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo ✓ Limpeza concluida!
echo.

echo [2/4] Limpando cache do npm...
call npm cache clean --force
echo ✓ Cache limpo!
echo.

echo [3/4] Reinstalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias
    pause
    exit /b 1
)
echo ✓ Dependencias instaladas!
echo.

echo [4/4] Verificando instalacao...
call npm list react-scripts
if %errorlevel% neq 0 (
    echo Instalando react-scripts...
    call npm install react-scripts
)
echo ✓ Verificacao concluida!
echo.

echo ========================================
echo    INSTALACAO CORRIGIDA!
echo ========================================
echo.
echo Agora execute: npm start
echo.
pause
