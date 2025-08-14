# Javascript

```
npm init --yes
```

**package.json**
```json
//Přidat (Abych mohl používat export/import. Místo require):
"type": "module"
```

**objects/books.js**
```javascript
export const books=[
    {id: 1, title: "Konstr. tabulky", year: 2020},
    {id: 2, title: "Základy konstruování", year: 2021},
];
```
**index.js**
```javascript
import { books } from "./objects/books.js";

console.log("books: ", books);
```

----------------------------------------------------
# Typescript

```
npm init --yes
npm install typescript --save-dev
npx tsc --version
```

**package.json**
```json
//Přidat (Jinak kompilace hlásí chybu):
"type": "module"
```

**types/Book.ts**
```typescript
export interface Book {
    id: number;
    title: string;
    year: number;
}
```

**objects/books.ts**
```typescript
import type { Book } from "@root/types/Book.ts";  //Aby fungoval @root, nutno mít nastaveno "paths" v tsconfig.json

export const books: Book[]=[
    {id: 1, title: "Konstr. tabulky", year: 2020},
    {id: 2, title: "Základy konstruování", year: 2021},
];
```

**index.ts**
```typescrpit
import { books } from "./objects/books.js";

console.log("books: ", books);
```

## Kompilace - existuje několik možností

1. Kompilace s výběrem souboru, bez *tsconfig.json*
- **Kompilace s tsconfig.json je lepší**
- Definice souboru při kompilaci
- Kompiluje i soubory, které jsou v daném souboru v importu
- Kompilované soubory jsou ve stejných adresářích jako zdrojové soubory - VELICE NEPŘEHLEDNÉ A NEPRAKTICKÉ
```
npx tsc index.ts
```

2. Kompilace dle *tsconfig.json*
**Zkopírovat existující soubor *tsconfig.json***
```json
{
  "compilerOptions": {
    /* Základní nastavení jazyka a modulů */
    "target": "esnext",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "esModuleInterop": true,

    /* Přísná kontrola typů */
    "strict": true,

    /* Zajištění správné syntaxe modulů */
    "verbatimModuleSyntax": true,

    /* Urychlení kompilace a čistota */
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,

    /* Cesty a aliasy */
    "baseUrl": "./",
    "paths": {
      "@root/*": ["./*"],
      "@src/*": ["./src/*"]
    },

    /* Výstup kompilace */
    "outDir": "./dist",
    "rootDir": "./"
  },
  "include": [
    "**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

**Další možností je: Vygenerování *tsconfig.json* s výchozím nastavením souboru.**
- Výchozí nastavení ale není ideální.
```
npx tsc --init
```

**Kompilace**
```
npx tsc
```

### Vysvětlení: tsconfig.json
```json
    // File Layout
    "rootDir": "./",
    "outDir": "./dist",
	
    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",			// Jaký typ modulů: commonjs, esnext, nodenext. nodenext - doporučeno pro nodejs.
	"moduleResolution": "nodenext"	// Není nutno uvádět, podle "module" se nastaví defaultně.
    "target": "esnext",				// Do jaké verze javascriptu se má typescript kompilovat. exnext = nejnovější verze
    "types": [],					// Jaké balíčky s typovými definicemi (.d.ts) má typescript zahrnout do projektu.
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

Generovat další soubory: true/false
    // Other Outputs
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false,
	
    // Recommended Options
    "strict": true,		// true/false. Zásadní volba. strict: true Odpovídá: noImplicitAny + strictNullChecks + strictFunctionTypes + strictPropertyInitialization + noImplicitThis
	"esModuleInterop": true,	// Ponechat nastaveno vždy, nic se tím nepokazí. Nutno pokud by nějaký npm balíček používal CommonJS. 
	"skipLibCheck": true,		// Ponechat, zrychluje kompilace. Znamená: přeskoč kontrolu typů v "node_modules"
    "verbatimModuleSyntax": true,	// U nového projektu ponechat. Říká kompilátoru, aby zachoval syntaxi importů a exportů.
	"forceConsistentCasingInFileNames": true,	// Zajišťuje, že se soubory importují se stejným názvem, včetně velikosti písmen, jako mají na disku. 
    "resolveJsonModule": true,					// Dovol mi importovat .json soubory přímo do kódu a pracovat s nimi jako s typed objekty.“
	
	Doporučeno nepoužít:
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
```
