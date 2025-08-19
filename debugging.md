# Javascript debuging
```javascript
console.clear()
console.log()
console.table()
console.time("add");	// Začíná měřit čas
console.timeEnd("add");	// Končí měřit čas, a vypíše čas trvání.
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
- Local: !!! velice důležité. Ze jsou vidět všechny lokální i globální proměnné
- Call Stack: zásobník

## Debuging - Sources
- **Page** je obsah souborů, načtený ze serveru. Tyto se mohou měnit, ale zatím obsah uložen pouze lokálně.
- **Workspace**	Obsah změny souborů se ukládá do zdrojových souborů.
- **Overrides**	Obsah změny souborů se ukládá do nové lokace, aniž by se měnil originál souborů.

## Vizuální vodítka: workspace vs. overrides
- Pokud používáte **Workspace**, objeví se vedle názvu souboru malá **zelená tečka**. To znamená, že soubor je propojen s vaším lokálním projektem a všechny změny se ukládají přímo na disk.

