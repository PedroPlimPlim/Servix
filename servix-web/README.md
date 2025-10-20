# 🚀 Servix Web - Frontend

## 📋 Pré-requisitos

- Node.js 16+ 
- npm 8+
- PostgreSQL (para o backend)

## 🔧 Instalação Rápida

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Firebase
Crie um arquivo `.env.local` na raiz do projeto:

```env
REACT_APP_FIREBASE_API_KEY=sua_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=seu-projeto-id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

### 3. Executar
```bash
npm start
```

## 🔧 Solução de Problemas

### Erro: "Missing script: start"
```bash
npm install
npm start
```

### Erro: "react-scripts não é reconhecido"
```bash
npm install react-scripts
npm start
```

### Erro: "Invalid options object"
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📱 Funcionalidades

- ✅ Login/Registro com Firebase
- ✅ Dashboard responsivo
- ✅ Sidebar navegável
- ✅ Cards de métricas
- ✅ Gráficos e tabelas
- ✅ Design moderno

## 🌐 Acesso

- **Desenvolvimento:** http://localhost:3000
- **Produção:** Após build

## 📁 Estrutura

```
servix-web/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── services/
│   └── contexts/
├── package.json
└── README.md
```

## 🚀 Scripts Disponíveis

- `npm start` - Executa em modo desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa testes
- `npm eject` - Ejetar configurações

## 📞 Suporte

Para problemas específicos, consulte o arquivo `INSTRUCOES_INSTALACAO.md` na raiz do projeto.
