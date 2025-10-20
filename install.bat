@echo off
echo ========================================
echo    INSTALACAO AUTOMATICA - SERVIX
echo ========================================
echo.

echo [1/5] Instalando dependencias do backend...
cd api_servix
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias do backend
    pause
    exit /b 1
)
echo ✓ Backend instalado com sucesso!
echo.

echo [2/5] Instalando dependencias do frontend web...
cd ..\servix-web
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias do frontend web
    pause
    exit /b 1
)
echo ✓ Frontend web instalado com sucesso!
echo.

echo [3/5] Instalando dependencias do mobile...
cd ..\src
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias do mobile
    pause
    exit /b 1
)
echo ✓ Mobile instalado com sucesso!
echo.

echo [4/5] Instalando dependencias do app expo...
cd ..\servix-app
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias do app expo
    pause
    exit /b 1
)
echo ✓ App expo instalado com sucesso!
echo.

echo [5/5] Instalacao concluida!
echo.
echo ========================================
echo    PROXIMOS PASSOS:
echo ========================================
echo 1. Configure o banco de dados PostgreSQL
echo 2. Crie o arquivo .env na pasta api_servix
echo 3. Crie o arquivo .env.local na pasta servix-web
echo 4. Configure o Firebase
echo 5. Execute: npm start
echo.
echo Para mais detalhes, consulte INSTRUCOES_INSTALACAO.md
echo.
pause
