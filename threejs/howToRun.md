# Three.js - Spuštění pod npm

## 1. Instalace a použití dle: Three.js 

### Threejs soubory:
- index.html
- main.js

### three.js
```
npm install --save three
```

### vite
```
npm install --save-dev vite
```

### Run:
```
npx vite
```

### Build for production
```
npx vite build  (vytvoří adresář: dist)
```

### Production run
```
cd dist
npx serve
```

### Pozn. Pokud bych chtěl používat "npm run ..." příkazy:
Přidáno do package.json:
```
  "scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
  }
```

## 2. Instalace a použití dle: https://threejs-journey.com/lessons/first-threejs-project#create-a-node-js-project

```
npm init -y
npm i vite
npm i three
```

### Threejs soubory:
- index.html
- main.js

Úprava package.json:
```
{
  // ...
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  // ...
}
```

### Development
```
npm run dev		(development run)
```

### Production
```
npm run build	(build for production)
cd dist
npx serve
```

---

## Pozn. Základy k npm

```
npm -v			(Info, jestli nainstalován npm)
npm init --yes	(Inicializace npm projektu)
npm list		(Info, jaké balíčky nainstalovány)
```
