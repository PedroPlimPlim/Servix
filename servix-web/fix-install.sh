#!/bin/bash

echo "========================================"
echo "   CORRIGINDO PROBLEMAS - SERVIX WEB"
echo "========================================"
echo

echo "[1/4] Limpando cache e node_modules..."
rm -rf node_modules package-lock.json
echo "✓ Limpeza concluida!"
echo

echo "[2/4] Limpando cache do npm..."
npm cache clean --force
echo "✓ Cache limpo!"
echo

echo "[3/4] Reinstalando dependencias..."
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependencias"
    exit 1
fi
echo "✓ Dependencias instaladas!"
echo

echo "[4/4] Verificando instalacao..."
npm list react-scripts
if [ $? -ne 0 ]; then
    echo "Instalando react-scripts..."
    npm install react-scripts
fi
echo "✓ Verificacao concluida!"
echo

echo "========================================"
echo "   INSTALACAO CORRIGIDA!"
echo "========================================"
echo
echo "Agora execute: npm start"
echo
