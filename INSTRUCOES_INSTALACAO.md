# 🚀 Guia de Instalação - Servix

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. **Node.js** (versão 16 ou superior)
   - Download: https://nodejs.org/
   - Verificar instalação: `node --version`

2. **npm** (vem com o Node.js)
   - Verificar instalação: `npm --version`

3. **Git** (para clonar o repositório)
   - Download: https://git-scm.com/

## 🔧 Instalação Passo a Passo

### 1. Clonar o Repositório
```bash
git clone [URL_DO_REPOSITORIO]
cd Servix
```

### 2. Instalar Dependências do Backend
```bash
cd api_servix
npm install
```

### 3. Instalar Dependências do Frontend Web
```bash
cd ../servix-web
npm install
```

### 4. Instalar Dependências do Mobile
```bash
cd ../src
npm install
```

### 5. Instalar Dependências do App Expo
```bash
cd ../servix-app
npm install
```

## 🗄️ Configuração do Banco de Dados

### 1. Instalar PostgreSQL
- Download: https://www.postgresql.org/download/
- Criar um banco de dados chamado `servix`

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na pasta `api_servix` com:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=servix
DB_USER=seu_usuario
DB_PASS=sua_senha
JWT_SECRET=seu_jwt_secret_aqui
PORT=3000
```

## 🔥 Configuração do Firebase

### 1. Criar Projeto no Firebase
- Acesse: https://console.firebase.google.com/
- Crie um novo projeto
- Ative Authentication (Email/Password)

### 2. Configurar Frontend Web
Crie um arquivo `.env.local` na pasta `servix-web` com:

```env
REACT_APP_FIREBASE_API_KEY=sua_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=seu_projeto_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id
```

### 3. Configurar Mobile
Copie as mesmas configurações para o arquivo `src/firebase.js`

## 🚀 Executando o Projeto

### 1. Iniciar o Backend
```bash
cd api_servix
npm start
```

### 2. Iniciar o Frontend Web
```bash
cd servix-web
npm start
```

### 3. Iniciar o Mobile (Expo)
```bash
cd servix-app
npx expo start
```

## 🔧 Solução de Problemas Comuns

### Erro: "Missing script: start"
**Solução:**
```bash
cd servix-web
npm install
npm start
```

### Erro: "Invalid options object. Dev Server has been initialized using an options object that does not match the API schema"
**Solução:**
```bash
cd servix-web
rm -rf node_modules package-lock.json
npm install
npm start
```

### Erro: "react-scripts não é reconhecido"
**Solução:**
```bash
cd servix-web
npm install react-scripts
npm start
```

### Erro: "Module not found"
**Solução:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Erro: "Firebase not initialized"
**Solução:**
1. Verificar se o arquivo `.env.local` existe
2. Verificar se as variáveis estão corretas
3. Reiniciar o servidor

## 📱 Executando no Mobile

### 1. Instalar Expo CLI
```bash
npm install -g @expo/cli
```

### 2. Instalar Expo Go no celular
- Android: Google Play Store
- iOS: App Store

### 3. Executar o projeto
```bash
cd servix-app
npx expo start
```

## 🌐 URLs de Acesso

- **Frontend Web:** http://localhost:3000
- **Backend API:** http://localhost:3000
- **Mobile:** Escaneie o QR code no terminal

## 📝 Notas Importantes

1. **Sempre execute `npm install`** após clonar o repositório
2. **Configure as variáveis de ambiente** antes de executar
3. **Verifique se o PostgreSQL está rodando** antes de iniciar o backend
4. **Use a mesma versão do Node.js** em todos os ambientes

## 🆘 Ainda com Problemas?

Se ainda estiver com problemas:

1. Verifique se todas as dependências estão instaladas
2. Verifique se as variáveis de ambiente estão corretas
3. Verifique se o banco de dados está rodando
4. Verifique se as portas não estão em uso
5. Reinicie o computador e tente novamente

## 📞 Suporte

Para mais ajuda, entre em contato com a equipe de desenvolvimento.