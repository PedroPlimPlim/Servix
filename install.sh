#!/bin/bash

echo "========================================"
echo "   INSTALACAO AUTOMATICA - SERVIX"
echo "========================================"
echo

echo "[1/5] Instalando dependencias do backend..."
cd api_servix
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependencias do backend"
    exit 1
fi
echo "✓ Backend instalado com sucesso!"
echo

echo "[2/5] Instalando dependencias do frontend web..."
cd ../servix-web
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependencias do frontend web"
    exit 1
fi
echo "✓ Frontend web instalado com sucesso!"
echo

echo "[3/5] Instalando dependencias do mobile..."
cd ../src
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependencias do mobile"
    exit 1
fi
echo "✓ Mobile instalado com sucesso!"
echo

echo "[4/5] Instalando dependencias do app expo..."
cd ../servix-app
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependencias do app expo"
    exit 1
fi
echo "✓ App expo instalado com sucesso!"
echo

echo "[5/5] Instalacao concluida!"
echo
echo "========================================"
echo "   PROXIMOS PASSOS:"
echo "========================================"
echo "1. Configure o banco de dados PostgreSQL"
echo "2. Crie o arquivo .env na pasta api_servix"
echo "3. Crie o arquivo .env.local na pasta servix-web"
echo "4. Configure o Firebase"
echo "5. Execute: npm start"
echo
echo "Para mais detalhes, consulte INSTRUCOES_INSTALACAO.md"
echo
