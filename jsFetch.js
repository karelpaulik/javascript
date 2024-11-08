JAVASCRIPT - fetch
..........................................................................................
Chrom potřebuje pro "fetch" lokálního souboru povolit CORS.

To se prování při spouštění chromu přepínači:
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="D:\temp2\pokus"
...........................................................................................
1.

fetch("pokus.txt")
.then(x => x.text())
.then(y => console.log(y));
............................................................................................
2.
f1("pokus.txt");

async function f1(file) {
let x = await fetch(file);
let y = await x.text();
console.log(y);
}
