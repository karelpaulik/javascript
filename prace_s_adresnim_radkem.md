# Základní příkazy jsou:
- **window.location** - pracuje s existujícím oknem
- **window.open** - otevírá nové okno

# window.location

Objekt `window.location` je v JavaScriptu jedním z nejdůležitějších nástrojů pro práci s prohlížečem. Slouží jako **most mezi vaším kódem a adresním řádkem prohlížeče**.

Pomocí tohoto objektu můžete zjistit, na jaké adrese se uživatel nachází, nebo ho programově přesměrovat jinam.

-----

## 🗺️ Anatomie URL přes `window.location`

Představte si, že se nacházíte na této adrese:
`https://www.example.cz:8080/produkty/boty?barva=cerna#detail`

Objekt `window.location` tuto adresu rozloží na jednotlivé části, ke kterým můžete přistupovat jako k vlastnostem:

| Vlastnost | Hodnota v příkladu | Popis |
| :--- | :--- | :--- |
| **$href$** | `https://www.example.cz:8080/...` | **Celá URL adresa** jako jeden řetězec. |
| **$protocol$** | `https:` | Protokol (včetně dvojtečky). |
| **$host$** | `www.example.cz:8080` | Hostitel (doména) včetně čísla portu. |
| **$hostname$** | `www.example.cz` | Pouze doménové jméno (bez portu). |
| **$port$** | `8080` | Číslo portu (pokud je v URL uvedeno). |
| **$pathname$** | `/produkty/boty` | Cesta k souboru nebo zdroji (začíná `/`). |
| **$search$** | `?barva=cerna` | Parametry za otazníkem (query string). |
| **$hash$** | `#detail` | Kotva (fragment) začínající znakem `#`. |

-----

## 🛠️ Nejpoužívanější Metody

Kromě čtení dat můžete pomocí `window.location` provádět akce:

### 1\. Přesměrování (Redirect)

Existují tři hlavní způsoby, jak poslat uživatele na jinou stránku:

```javascript
// A. Klasické nastavení (vytvoří záznam v historii - tlačítko "Zpět" funguje)
window.location.href = "https://www.google.com";

// B. Metoda assign() (stejné jako výše)
window.location.assign("https://www.google.com");

// C. Metoda replace() (Smaže aktuální stránku z historie - tlačítko "Zpět" uživatele nevrátí sem)
window.location.replace("https://www.google.com");
```

### 2\. Obnovení stránky (Reload)

Pokud potřebujete stránku načíst znovu (např. po resetování formuláře):

```javascript
// Obnoví aktuální stránku
window.location.reload();
```

-----

## 💡 Praktické příklady

### Získání domény pro podmínku

Můžete chtít spustit kód jen na určitém webu:

```javascript
if (window.location.hostname === "localhost") {
    console.log("Běžíme na vývojovém serveru");
}
```

### Změna pouze části URL

Můžete změnit jen kotvu (hash), aniž by se celá stránka znovu načítala ze serveru:

```javascript
// URL se změní na .../stranka.html#kontakt
window.location.hash = "kontakt";
```

### Automatické přesměrování po čase

```javascript
setTimeout(() => {
    window.location.href = "https://www.seznam.cz";
}, 5000); // Přesměruje za 5 sekund
```

# window.open()

Objekt $window.open()$ je metoda v JavaScriptu, která slouží k **programovému otevření nového okna prohlížeče** nebo **nové záložky**. Je to ekvivalent ručního otevření nového okna uživatelem, ale s možností kontrolovat cílovou URL, název okna a jeho vzhled (rozměry, lišty atd.).

-----

## 🛠️ Syntaxe a Parametry $window.open()$

Metoda $window.open()$ přijímá až tři volitelné argumenty:

```javascript
window.open(url, windowName, features);
```

### 1\. $url$ (Volitelný)

  * **Popis:** URL adresa, která se má v novém okně načíst.
  * **Příklad:** `"https://www.google.com"`
  * Pokud je prázdný řetězec $""$ nebo vynechán, otevře se prázdné okno.

### 2\. $windowName$ (Volitelný)

  * **Popis:** Jedinečný název (identifikátor) nového okna.
  * **Příklad:** `"faktura_okno"`
  * **Klíčová funkce:** Pokud zavoláte $window.open()$ vícekrát se stejným názvem, **nebude se otevírat nové okno**, ale nový obsah se načte do již existujícího okna s tímto názvem.
  * **Speciální hodnoty:**
      * `"_blank"`: Otevře vždy nové, nepojmenované okno/záložku. (Nejpoužívanější)
      * `"_self"`: Načte URL do aktuálního okna (stejné jako $window.location.href$).
      * `"_parent"`: Načte URL do rodičovského rámce (pokud existuje).

### 3\. $features$ (Volitelný)

  * **Popis:** Řetězec oddělený čárkami, který definuje vzhled a chování nového okna (používá se pro pop-up okna).
  * **Příklad:** `"width=400,height=300,left=100,top=50,resizable=yes"`
  * **Nejčastější vlastnosti:**
      * `width`/`height`: Rozměry okna v pixelech.
      * `left`/`top`: Pozice okna na obrazovce.
      * `menubar=yes|no`: Zobrazit/skrýt menu lištu.
      * `scrollbars=yes|no`: Zobrazit/skrýt posuvníky.

-----

## 💡 Praktické použití

### 1\. Otevření nové záložky (Nejčastější)

Chcete otevřít externí odkaz v nové záložce, ale ponechat uživatele na původní stránce.

```javascript
// Otevře Google v nové, nepojmenované záložce (standardní chování _blank)
window.open("https://www.google.com", "_blank");
```

### 2\. Otevření malého Pop-up okna

Chcete otevřít malé okno pro tisk nebo zobrazení detailu, bez adresního řádku.

```javascript
window.open(
    "tisk_nahledu.html",
    "nahled", // Název okna
    "width=500,height=400,resizable=no,scrollbars=no,toolbar=no,location=no"
);
```

### 3\. Získání reference na nové okno

$window.open()$ **vrací objekt $window$** nově otevřeného okna. To je klíčové pro komunikaci mezi rodičovskou a dceřinou stránkou.

```javascript
const noveOkno = window.open("loader.html", "novyLoader", "width=200,height=100");

// Po 5 sekundách zavřeme nové okno programově
if (noveOkno) {
    setTimeout(() => {
        noveOkno.close();
        console.log("Nové okno bylo zavřeno.");
    }, 5000);
}
```

-----

## ⚠️ Důležité Upozornění: Pop-up Blokování

Moderní prohlížeče (Chrome, Firefox, Edge) mají velmi přísné blokování vyskakovacích oken.

**Aby $window.open()$ fungoval spolehlivě, musí být volán jako přímý následek akce uživatele** (např. v obslužné funkci události $onclick$ tlačítka).

```javascript
// ✅ SPRÁVNĚ (voláno po kliknutí uživatele)
document.getElementById('otvorit').onclick = function() {
    window.open("https://example.com"); 
};

// ❌ NESPRÁVNĚ (voláno po časovači/bez interakce, bude pravděpodobně blokováno)
setTimeout(() => {
    window.open("https://example.com");
}, 1000); 
```

**Závěr:** $window.open()$ je silný nástroj pro otevření nového kontextu, ale jeho použití pro pop-upy je limitováno bezpečnostními opatřeními prohlížečů. Pro standardní navigaci je lepší používat $window.location.href$.

Máte nějaký konkrétní scénář, kde byste $window.open()$ chtěl použít?
