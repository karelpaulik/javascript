# Javascript debuging
```javascript
console.clear()
console.log()
console.table()
console.time("m1");	// Začíná měřit čas // m1 je identifikátor stopek. Stopek může být více.
console.timeEnd("m1");	// Končí měřit čas, a vypíše čas trvání.
```

Při klepnutí na proklikávací text (vpravo) se zobrazí, od kud chyba pochází

## Konzole - jak na víceřádkový text
shift + enter

# Debuging v Chrome

## Tlačítka při krokování kódu

- F8 (resume)				pokračování kódu
- F10	(step over)			skok na další funkci/řádek
- F11 (step into)			skočí do volané funkce
- shift + F11 (step out)	vyskočí z volané funkce do bodu, kde byla funkce volána
- F9 (step)				umožňuje jít do asynchronního kódu. (await, callbacky)

Poznámka: Tlačítka Step a Step into mají v moderních prohlížečích stejnou základní funkci pro většinu běžných případů, zejména pokud nepracujete s asynchronními operacemi jako jsou setTimeout nebo Promise. Pro začátečníky je prakticky nerozlišitelné.

## Nastavení breakpointů:
Více možností:
- Event listener breakpoints	Tj. např. na všechny kliky myši, stisk kláves
- Nastavení breakpoint na řádek
- V kódu: **debugger;**	!!! Toto funguje pouze, když je otevřeno DEVTOOLS. Jinak se "debugger;" přeskočí.

## DEVTOOLS
Debug panel:
- Watch
- Local: 🔴 velice důležité. Ze jsou vidět všechny lokální i globální proměnné
- Call Stack: zásobník

## Debuging - Sources
- **Page** je obsah souborů, načtený ze serveru. Tyto se mohou měnit, ale zatím obsah uložen pouze lokálně.
- **Workspace**	Obsah změny souborů se ukládá do zdrojových souborů.
- **Overrides**	Obsah změny souborů se ukládá do nové lokace, aniž by se měnil originál souborů.

## Vizuální vodítka: workspace vs. overrides
- Pokud používáte **Workspace**, objeví se vedle názvu souboru malá **zelená tečka** 🟢. To znamená, že soubor je propojen s vaším lokálním projektem a všechny změny se ukládají přímo na disk.
- Pokud používáte **Overrides**, objeví se vedle názvu souboru malá **fialová tečka** 🟣. To znamená, že prohlížeč používá vaši lokální, přepsanou verzi souboru místo té, která se stáhla ze serveru.

# Debuging v VSCODE
## Javascript *index.html + script.js*
Např. kód:

*index.html*
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Sčítač</title>
        <script src="script.js"></script>
        <meta charset="utf-8">
    </head>

    <body>
        <p>Číslo 1</p>
        <input id="a" type="number">

        <p>Číslo 2</p>
        <input id="b" type="number"> <br /> <br />

        <input class="button" type="button" onclick="add()" value="Sečíst">
        <p id="result">0</p>
    </body>
</html>
```

*script.js*
```javascript
function add() {
    let number1 = document.getElementById("a").value;
    let number2 = document.getElementById("b").value;

    document.getElementById("result").innerHTML = parseInt(number1) + parseInt(number2);
}
```

- Run - Start Debuging
- Vybrat: Web App (Chrome)
- Tímto se vytvoří: .vscode/launch.json
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
Upravit na:
- Upravuje se: **url** -> **file**
- Cesta uvnitř **file** je s dvojitými uvozovkami!!!. Jedna uvozovka značí escapování.
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "file": "D:\\path_to_file\\index.html",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
- **Start Debugging (F5)**
- Nyní můžeme přidávat breakpointy a debugovat.

## Node.js - zde je několik způsobů.
### JavaScript Debug Terminal
- Nejjednodušší
- Otevřete panel ladění: V levém menu VS Code klikněte na ikonu Run and Debug (ikona s broukem a přehrávacím tlačítkem).
- Tlačítko: JavaScript Debug Terminal (tím se spustí nový terminál, kde je již připojený debugger)
- Pokud nyní: **node index.js**
- Tak pokud je někde v kód příkaz **debuger;** kód se na něm zastaví.

### Vytvoření **launch.json**
- Otevřete panel ladění: V levém menu VS Code klikněte na ikonu Run and Debug (ikona s broukem a přehrávacím tlačítkem).
- create a launch.json file
- Select debuger: Node.js
- Vybrat: {} Node.js: "Launch Program"
- Upravit soubor:
- Zejména nastavit atribut: **program**
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\index.js"
        }
    ]
}
```
- Pozn. Tímto se vytvoří: *.vscode/launch.json*
- **Start Debugging (F5)** Pokud bude někde přikaz **debugger;** tak se na něm kód zastaví.
