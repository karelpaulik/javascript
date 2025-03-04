# Práce se soubory.

---

## Obsah

- [Práce se soubory](#práce-se-soubory)
  - [Cesty k souborům](#cesty-k-souborům)
    - [Relativní cesta](#relativní-cesta)
    - [Absolutní cesta](#absolutní-cesta)
  - [Vytváření souboru](#vytváření-souboru)
    - [Vytvoření souboru pomocí fs.writeFile()](#vytvoření-souboru-pomocí-fswritefile)
    - [Vytvoření souboru pomocí fs.open()](#vytvoření-souboru-pomocí-fsopen)
  - [Čtení souborů](#čtení-souborů)
    - [Asynchronní čtení (doporučeno)](#asynchronní-čtení-doporučeno)
    - [Synchronní čtení](#synchronní-čtení)
    - [Čtení po řádcích (pomocí readline)](#čtení-po-řádcích-pomocí-readline)
    - [Použití fs.promises (asynchronní s async/await)](#použití-fspromises-asynchronní-s-asyncawait)
  - [Mazání souborů](#mazání-souborů)
    - [Mazání souboru pomocí fs.unlink()](#mazání-souboru-pomocí-fsunlink)
    - [Mazání souboru pomocí fs.rm()](#mazání-souboru-pomocí-fsrm)
  - [Přejmenování souborů](#přejmenování-souborů)
    - [Přejmenování souboru pomocí fs.rename()](#přejmenování-souboru-pomocí-fsrename)
  - [Editace souboru](#editace-souboru)
    - [Editace souboru pomocí fs.writeFile() (pro přepsání souboru)](#editace-souboru-pomocí-fswritefile-pro-přepsání-souboru)
    - [Editace souboru pomocí fs.appendFile() (pro přidání textu)](#editace-souboru-pomocí-fsappendfile-pro-přidání-textu)
  - [fs.open()](#fsopen)
    - [Otevření souboru pro čtení](#otevření-souboru-pro-čtení)
    - [Otevření souboru pro zápis](#otevření-souboru-pro-zápis)
    - [Otevření souboru pro připojení](#otevření-souboru-pro-připojení)

---

# Cesty k souborům

V Node.js můžete používat **absolutní** a **relativní** cesty k souborům.

### **1. Relativní cesta**  
Relativní cesta je vztažená k místu, odkud je skript spuštěn.  

```javascript
const fs = require('fs');

// Uloží soubor do podsložky "data" ve stejném adresáři jako skript
fs.writeFile('./data/relativni_soubor.txt', 'Obsah souboru.', (err) => {
    if (err) throw err;
    console.log('Soubor vytvořen pomocí relativní cesty.');
});
```

Další příklady relativních cest:  
- `./soubor.txt` → ve stejném adresáři jako skript  
- `../soubor.txt` → o úroveň výš v adresářové struktuře  
- `../../soubor.txt` → o dvě úrovně výš  

---

### **2. Absolutní cesta**  
Absolutní cesta určuje přesnou lokaci souboru v systému.

```javascript
const fs = require('fs');
const path = require('path');

// Získání absolutní cesty (např. "C:/projekty/app/data/absolutni_soubor.txt")
const filePath = path.join(__dirname, 'data', 'absolutni_soubor.txt');

fs.writeFile(filePath, 'Obsah souboru.', (err) => {
    if (err) throw err;
    console.log('Soubor vytvořen pomocí absolutní cesty.');
});
```

#### **Vysvětlení:**
- `__dirname` → obsahuje absolutní cestu ke složce, kde je aktuální skript.  
- `path.join(__dirname, 'data', 'soubor.txt')` → správně spojí cestu i na Windows (`\`) a Linux/macOS (`/`).  

---

### **Shrnutí**
- **Relativní cesta** → závislá na umístění skriptu.  
- **Absolutní cesta** → určuje přesné místo v systému.  
- Doporučuje se používat `path.join()` pro přenositelnost mezi operačními systémy.

---

# Vytváření souboru

V Node.js můžete vytvořit soubor několika způsoby, například pomocí modulu `fs` (File System). Zde jsou tři nejběžnější způsoby:

### 1. **Použití `fs.writeFile` (Asynchronní)**
Tento způsob je preferován, protože je asynchronní a neblokuje běh programu.

```javascript
const fs = require('fs');

fs.writeFile('novy_soubor.txt', 'Toto je obsah souboru.', (err) => {
    if (err) throw err;
    console.log('Soubor byl vytvořen!');
});
```

### 2. **Použití `fs.writeFileSync` (Synchronní)**
Tento způsob je synchronní a blokuje běh programu, dokud operace není dokončena.

```javascript
const fs = require('fs');

try {
    fs.writeFileSync('novy_soubor.txt', 'Toto je obsah souboru.');
    console.log('Soubor byl vytvořen!');
} catch (err) {
    console.error(err);
}
```

### 3. **Použití `fs.appendFile` (Přidání do souboru nebo jeho vytvoření)**
Tento způsob přidá obsah do existujícího souboru nebo vytvoří nový, pokud neexistuje.

```javascript
const fs = require('fs');

fs.appendFile('novy_soubor.txt', 'Přidáno do souboru.\n', (err) => {
    if (err) throw err;
    console.log('Text byl přidán do souboru!');
});
```

Všechny tyto metody vytvoří soubor v aktuálním adresáři skriptu. Pokud chcete specifikovat jinou cestu, použijte absolutní nebo relativní cestu (např. `'./data/novy_soubor.txt'`).

---

# Čtení souborů

V Node.js můžete číst soubor pomocí modulu `fs`. Existují **asynchronní** a **synchronní** způsoby.

---

## 1. **Asynchronní čtení (doporučeno)**
Nezablokuje běh programu – vhodné pro většinu aplikací.

```javascript
const fs = require('fs');

fs.readFile('soubor.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Chyba při čtení souboru:', err);
        return;
    }
    console.log('Obsah souboru:', data);
});
```

- **`utf8`** → definuje kódování (bez něj se vrátí `Buffer`).
- **`err`** → zachytí chybu, pokud soubor neexistuje.

---

## 2. **Synchronní čtení**
Blokuje běh programu, dokud se soubor nepřečte.

```javascript
const fs = require('fs');

try {
    const data = fs.readFileSync('soubor.txt', 'utf8');
    console.log('Obsah souboru:', data);
} catch (err) {
    console.error('Chyba při čtení souboru:', err);
}
```

- Používejte jen tam, kde není nutná vysoká výkonnost.

---

## 3. **Čtení po řádcích (pomocí `readline`)**
Vhodné pro velké soubory, protože je čte po řádcích místo načítání celého obsahu.

```javascript
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('soubor.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log('Řádek:', line);
});
```

Tento způsob je efektivnější pro **velké soubory**, protože nezabírá tolik paměti.

---

## 4. **Použití `fs.promises` (asynchronní s `async/await`)**
Moderní přístup pomocí `fs.promises.readFile`:

```javascript
const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('soubor.txt', 'utf8');
        console.log('Obsah souboru:', data);
    } catch (err) {
        console.error('Chyba při čtení souboru:', err);
    }
}

readFileAsync();
```

Tento způsob je skvělý pro **čistější kód**, pokud pracujete s `async/await`.

---

## **Shrnutí**
| Metoda | Blokuje běh programu? | Kdy použít? |
|--------|-----------------|----------------|
| `fs.readFile` | Ne | Obecné použití (doporučeno) |
| `fs.readFileSync` | Ano | Pokud potřebujete synchronní operaci |
| `readline` | Ne | Pro velké soubory (čtení po řádcích) |
| `fs.promises.readFile` | Ne | Moderní `async/await` přístup |

Pokud nepotřebujete synchronní operace, **doporučuje se asynchronní čtení (`fs.readFile`)**.

---

# Mazání souborů

V Node.js můžete mazat soubory pomocí modulu `fs`. Existují **asynchronní** a **synchronní** způsoby.

---

## **1. Asynchronní mazání souboru (doporučeno)**
Nezablokuje běh programu.

```javascript
const fs = require('fs');

fs.unlink('soubor.txt', (err) => {
    if (err) {
        console.error('Chyba při mazání souboru:', err);
        return;
    }
    console.log('Soubor byl úspěšně smazán.');
});
```

- **`fs.unlink`** smaže soubor.
- Pokud soubor neexistuje, vrátí chybu.

---

## **2. Synchronní mazání souboru**
Blokuje běh programu, dokud se soubor nesmaže.

```javascript
const fs = require('fs');

try {
    fs.unlinkSync('soubor.txt');
    console.log('Soubor byl úspěšně smazán.');
} catch (err) {
    console.error('Chyba při mazání souboru:', err);
}
```

Používejte pouze, když potřebujete, aby operace byla dokončena **před pokračováním skriptu**.

---

## **3. Mazání souboru pomocí `fs.promises` (s `async/await`)**
Moderní přístup s **`async/await`**:

```javascript
const fs = require('fs').promises;

async function deleteFile() {
    try {
        await fs.unlink('soubor.txt');
        console.log('Soubor byl úspěšně smazán.');
    } catch (err) {
        console.error('Chyba při mazání souboru:', err);
    }
}

deleteFile();
```

Tento způsob je skvělý pro **čistější kód** a dobře funguje s asynchronním prostředím.

---

## **4. Kontrola, zda soubor existuje před smazáním**
Pokud chcete předejít chybě při neexistujícím souboru:

```javascript
const fs = require('fs');

if (fs.existsSync('soubor.txt')) {
    fs.unlink('soubor.txt', (err) => {
        if (err) throw err;
        console.log('Soubor byl úspěšně smazán.');
    });
} else {
    console.log('Soubor neexistuje.');
}
```

---

## **Shrnutí**
| Metoda | Blokuje běh programu? | Kdy použít? |
|--------|----------------|--------------|
| `fs.unlink` | Ne | Obecné použití (doporučeno) |
| `fs.unlinkSync` | Ano | Když potřebujete synchronní operaci |
| `fs.promises.unlink` | Ne | Moderní `async/await` přístup |

Pokud nepotřebujete synchronní operace, **doporučuje se asynchronní `fs.unlink()`**.

---

# Přejmenování souborů

V Node.js můžete přejmenovat soubor pomocí modulu `fs`. Existují **asynchronní** a **synchronní** způsoby.

---

## **1. Asynchronní přejmenování souboru (doporučeno)**
Nezablokuje běh programu.

```javascript
const fs = require('fs');

fs.rename('stary_soubor.txt', 'novy_soubor.txt', (err) => {
    if (err) {
        console.error('Chyba při přejmenování souboru:', err);
        return;
    }
    console.log('Soubor byl úspěšně přejmenován.');
});
```

- **`fs.rename(oldPath, newPath, callback)`** změní název souboru.
- Pokud soubor **neexistuje**, vrátí chybu.

---

## **2. Synchronní přejmenování souboru**
Blokuje běh programu, dokud není soubor přejmenován.

```javascript
const fs = require('fs');

try {
    fs.renameSync('stary_soubor.txt', 'novy_soubor.txt');
    console.log('Soubor byl úspěšně přejmenován.');
} catch (err) {
    console.error('Chyba při přejmenování souboru:', err);
}
```

Používejte pouze, pokud potřebujete, aby operace byla **okamžitě dokončena**.

---

## **3. Přejmenování pomocí `fs.promises` (s `async/await`)**
Moderní přístup s **`async/await`**:

```javascript
const fs = require('fs').promises;

async function renameFile() {
    try {
        await fs.rename('stary_soubor.txt', 'novy_soubor.txt');
        console.log('Soubor byl úspěšně přejmenován.');
    } catch (err) {
        console.error('Chyba při přejmenování souboru:', err);
    }
}

renameFile();
```

Tento způsob je skvělý pro **čistější kód** a dobře funguje v asynchronním prostředí.

---

## **4. Kontrola, zda soubor existuje před přejmenováním**
Pokud chcete předejít chybě při neexistujícím souboru:

```javascript
const fs = require('fs');

if (fs.existsSync('stary_soubor.txt')) {
    fs.rename('stary_soubor.txt', 'novy_soubor.txt', (err) => {
        if (err) throw err;
        console.log('Soubor byl úspěšně přejmenován.');
    });
} else {
    console.log('Soubor neexistuje.');
}
```

---

## **Shrnutí**
| Metoda | Blokuje běh programu? | Kdy použít? |
|--------|----------------|--------------|
| `fs.rename` | Ne | Obecné použití (doporučeno) |
| `fs.renameSync` | Ano | Když potřebujete synchronní operaci |
| `fs.promises.rename` | Ne | Moderní `async/await` přístup |

Pokud nepotřebujete synchronní operace, **doporučuje se asynchronní `fs.rename()`**.

---

# Editace souboru

V Node.js můžete soubor **editovat** několika způsoby v závislosti na tom, jaké změny potřebujete provést. Nejčastější metody jsou:  

1. **Přepsání celého souboru (`fs.writeFile`)**  
2. **Přidání obsahu na konec (`fs.appendFile`)**  
3. **Úprava konkrétního obsahu (`fs.readFile` → úprava → `fs.writeFile`)**  

---

## **1. Přepsání celého souboru (`fs.writeFile`)**
Tato metoda nahradí celý obsah souboru novým textem.

```javascript
const fs = require('fs');

fs.writeFile('soubor.txt', 'Nový obsah souboru.', (err) => {
    if (err) {
        console.error('Chyba při přepisování souboru:', err);
        return;
    }
    console.log('Soubor byl úspěšně přepsán.');
});
```

- **Pokud soubor neexistuje, vytvoří se nový.**
- **POZOR:** Starý obsah bude přepsán!

---

## **2. Přidání textu na konec souboru (`fs.appendFile`)**
Pokud chcete obsah **doplnit**, použijte `fs.appendFile`.

```javascript
const fs = require('fs');

fs.appendFile('soubor.txt', '\nPřidán nový řádek.', (err) => {
    if (err) {
        console.error('Chyba při úpravě souboru:', err);
        return;
    }
    console.log('Do souboru byl úspěšně přidán text.');
});
```

- **Nevymaže původní obsah**, ale **přidá nový na konec.**

---

## **3. Editace konkrétního obsahu**
Pokud chcete **upravit konkrétní část** souboru, musíte ho nejprve přečíst, změnit data a znovu uložit.

```javascript
const fs = require('fs');

fs.readFile('soubor.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Chyba při čtení souboru:', err);
        return;
    }

    // Nahradíme text "stary" na "novy"
    const updatedData = data.replace(/stary/g, 'novy');

    fs.writeFile('soubor.txt', updatedData, (err) => {
        if (err) {
            console.error('Chyba při zapisování souboru:', err);
            return;
        }
        console.log('Soubor byl úspěšně upraven.');
    });
});
```

- **Najde a nahradí určité slovo nebo frázi.**
- **Data se nejdříve přečtou, upraví a následně zapíšou zpět.**

---

## **4. Editace pomocí `fs.promises` a `async/await`**
Modernější způsob pomocí `fs.promises`:

```javascript
const fs = require('fs').promises;

async function editFile() {
    try {
        let data = await fs.readFile('soubor.txt', 'utf8');
        data = data.replace(/starý/g, 'nový'); // Změna textu
        await fs.writeFile('soubor.txt', data);
        console.log('Soubor byl úspěšně upraven.');
    } catch (err) {
        console.error('Chyba:', err);
    }
}

editFile();
```

- **Čistší a modernější kód.**
- **Vhodné pro asynchronní aplikace.**

---

## **Shrnutí metod pro editaci souboru**
| Metoda | Co dělá? | Kdy použít? |
|--------|---------|-------------|
| `fs.writeFile` | Přepíše celý soubor | Když chcete nahradit celý obsah |
| `fs.appendFile` | Přidá text na konec | Když chcete soubor rozšířit |
| `fs.readFile` → `fs.writeFile` | Upraví konkrétní obsah | Když chcete změnit jen část souboru |
| `fs.promises.readFile/writeFile` | Moderní přístup (`async/await`) | Když pracujete v asynchronním prostředí |

**Doporučený přístup:**  
✅ **Použijte `fs.appendFile`, pokud jen přidáváte obsah.**  
✅ **Použijte `fs.readFile` → `fs.writeFile`, pokud upravujete konkrétní řádky.**  
✅ **Použijte `fs.promises` pro moderní asynchronní kód.**

---

# fs.open()

V Node.js metoda `fs.open()` slouží k **otevření souboru** s různými režimy, jako je čtení, zápis nebo přidávání obsahu.  

---

## **1. Syntaxe `fs.open()`**
```javascript
fs.open(path, flags, mode, callback);
```
- **`path`** – cesta k souboru.  
- **`flags`** – režim otevření souboru (viz níže).  
- **`mode`** – oprávnění (volitelné, výchozí `0o666`).  
- **`callback(err, fd)`** – funkce, která vrátí `fd` (**file descriptor** – identifikátor otevřeného souboru).  

---

## **2. Příklady použití**

### **2.1 Otevření souboru pro čtení**
```javascript
const fs = require('fs');

fs.open('soubor.txt', 'r', (err, fd) => {
    if (err) {
        console.error('Chyba při otevírání souboru:', err);
        return;
    }
    console.log('Soubor byl úspěšně otevřen s fd:', fd);
    fs.close(fd, () => console.log('Soubor uzavřen.'));
});
```
- **Režim `r` (read)** – otevře soubor pouze pro čtení.  
- **`fs.close(fd)`** – zavře soubor po použití.  

---

### **2.2 Otevření souboru pro zápis (vytvoří soubor, pokud neexistuje)**
```javascript
fs.open('novy_soubor.txt', 'w', (err, fd) => {
    if (err) {
        console.error('Chyba při otevírání souboru:', err);
        return;
    }
    console.log('Soubor byl úspěšně otevřen pro zápis.');
    fs.close(fd, () => console.log('Soubor uzavřen.'));
});
```
- **Režim `w` (write)** – vytvoří nový soubor nebo vymaže obsah existujícího souboru.  

---

### **2.3 Otevření souboru pro přidání textu (append)**
```javascript
fs.open('soubor.txt', 'a', (err, fd) => {
    if (err) {
        console.error('Chyba při otevírání souboru:', err);
        return;
    }
    console.log('Soubor byl úspěšně otevřen pro přidání.');
    fs.close(fd, () => console.log('Soubor uzavřen.'));
});
```
- **Režim `a` (append)** – otevře soubor pro **přidávání** obsahu.  

---

## **3. Režimy otevření souboru (`flags`)**
| Režim | Popis |
|--------|-------------------------------------|
| `'r'` | Otevře soubor pro **čtení** (chyba, pokud neexistuje). |
| `'r+'` | Otevře soubor pro **čtení a zápis**. |
| `'w'` | Otevře soubor pro **zápis** (vytvoří nový, pokud neexistuje, smaže obsah pokud existuje). |
| `'w+'` | Otevře soubor pro **čtení i zápis** (vytvoří nový, pokud neexistuje, smaže obsah pokud existuje). |
| `'a'` | Otevře soubor pro **přidávání obsahu** (vytvoří, pokud neexistuje). |
| `'a+'` | Otevře soubor pro **čtení i přidávání obsahu** (vytvoří, pokud neexistuje). |

---

## **4. Alternativa: `fs.promises.open()` (async/await)**
Modernější přístup s `async/await`:

```javascript
const fs = require('fs').promises;

async function openFile() {
    try {
        const fileHandle = await fs.open('soubor.txt', 'r');
        console.log('Soubor byl úspěšně otevřen.');
        await fileHandle.close();
        console.log('Soubor uzavřen.');
    } catch (err) {
        console.error('Chyba při otevírání souboru:', err);
    }
}

openFile();
```
✅ **Doporučeno pro moderní asynchronní aplikace.**  

---

## **5. Shrnutí**
| Metoda | Blokuje běh programu? | Kdy použít? |
|--------|----------------|--------------|
| `fs.open()` | Ne | Pokud potřebujete ručně pracovat s `fd` |
| `fs.openSync()` | Ano | Když potřebujete synchronní přístup |
| `fs.promises.open()` | Ne | Moderní `async/await` přístup |

🔥 **Pokud pracujete s velkými soubory nebo potřebujete efektivní správu souborů, `fs.open()` je užitečný!**
