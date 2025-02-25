V JavaScriptu lze objekt definovat několika způsoby. Nejčastěji se používá **literál objektu**, **třída**, nebo **funkce konstruktor**.

### 1. **Literál objektu**

Nejjednodušší způsob, jak vytvořit objekt, je pomocí složených závorek `{}`:

```javascript
let osoba = {
    jmeno: "Petr",
    vek: 30,
    pozdrav: function() {
        console.log("Ahoj, jsem " + this.jmeno);
    }
};

// Přístup k vlastnostem objektu
console.log(osoba.jmeno); // Petr
osoba.pozdrav(); // Ahoj, jsem Petr
```

### 2. **Funkce konstruktor**

Používá se pro vytváření více instancí podobných objektů:

```javascript
function Auto(znacka, model) {
    this.znacka = znacka;
    this.model = model;
    this.info = function() {
        console.log(this.znacka + " " + this.model);
    };
}

let mojeAuto = new Auto("Ford", "Focus");
mojeAuto.info(); // Ford Focus
```

### 3. **Použití **``** (ES6)**

Modernější a přehlednější způsob:

```javascript
class Zvire {
    constructor(jmeno, druh) {
        this.jmeno = jmeno;
        this.druh = druh;
    }

    zvuk() {
        console.log(`${this.jmeno} vydává zvuk.`);
    }
}

let pes = new Zvire("Rex", "pes");
pes.zvuk(); // Rex vydává zvuk.
```

Každá z těchto metod se hodí pro jiný typ použití. Nejčastěji se používá **literál objektu** pro jednoduché objekty a **třídy (**``**\*\*\*\*\*\*\*\*)** pro složitější struktury.

Máš nějaký konkrétní případ, který chceš řešit? 😊

---

### **Porovnání: Funkce Konstruktor vs. Class v JavaScriptu**  

Funkce konstruktor a **`class`** v ES6 dělají podobnou věc – umožňují vytvářet objekty se stejnými vlastnostmi a metodami. **Třídy (`class`)** jsou modernější a čitelnější způsob, jak vytvářet objekty, ale funkce konstruktory se stále používají, hlavně ve starších kódech.

---

## **1. Funkce Konstruktor (Constructor Function)**  
Funkce konstruktor je běžná funkce, která se používá s klíčovým slovem `new` pro vytvoření nového objektu.

```javascript
function Auto(znacka, model) {
    this.znacka = znacka;
    this.model = model;
    this.info = function() {
        console.log(this.znacka + " " + this.model);
    };
}

// Vytvoření nové instance
let auto1 = new Auto("Ford", "Focus");
auto1.info(); // Ford Focus
```

### 🔹 **Nevýhody funkce konstruktoru:**
1. **Každá instance má vlastní kopii metod** – což může být neefektivní.
   - Řešení: Použití `prototype` pro sdílení metod:
     ```javascript
     function Auto(znacka, model) {
         this.znacka = znacka;
         this.model = model;
     }

     Auto.prototype.info = function() {
         console.log(this.znacka + " " + this.model);
     };

     let auto1 = new Auto("Ford", "Focus");
     auto1.info(); // Ford Focus
     ```
2. **Méně přehledná syntaxe**, hlavně když jde o složitější struktury.

---

## **2. `class` v ES6**
Třídy v ES6 zjednodušují práci s objekty a jsou čitelnější než funkce konstruktory.

```javascript
class Auto {
    constructor(znacka, model) {
        this.znacka = znacka;
        this.model = model;
    }

    info() {
        console.log(this.znacka + " " + this.model);
    }
}

// Vytvoření nové instance
let auto1 = new Auto("Tesla", "Model S");
auto1.info(); // Tesla Model S
```

### 🔹 **Výhody `class`:**
✅ **Čitelnější a modernější syntaxe** – vypadá jako v jiných OOP jazycích (Java, C#).  
✅ **Metody jsou sdílené** přes prototyp, takže šetří paměť.  
✅ **Podpora dědičnosti (`extends`)**:
```javascript
class ElektroAuto extends Auto {
    constructor(znacka, model, baterie) {
        super(znacka, model);
        this.baterie = baterie;
    }

    dojezd() {
        console.log(`${this.znacka} má baterii ${this.baterie} kWh.`);
    }
}

let tesla = new ElektroAuto("Tesla", "Model 3", 75);
tesla.info(); // Tesla Model 3
tesla.dojezd(); // Tesla má baterii 75 kWh.
```

---

## **🔥 Kdy použít co?**
| **Funkce Konstruktor** | **Třída (`class`)** |
|------------------------|--------------------|
| Starší syntaxe (ES5 a starší) | Modernější (ES6+) |
| Potřeba zpětné kompatibility | Čitelnější a snazší na údržbu |
| Nutnost používat `prototype` pro sdílení metod | Metody se automaticky přidávají do prototypu |
| Méně přehledné pro složitější struktury | Podporuje dědičnost (`extends`), lepší pro OOP |

### **Doporučení:**  
Používej **`class`**, pokud není důvod zůstat u funkce konstruktoru (např. kvůli starému kódu nebo specifickým optimalizacím).

Máš konkrétní případ, kde si nejsi jistý, co použít? 🚀

---

Funkce konstruktor - Každá instance má vlastní kopii metod. Vysvětlení:
Skvělá otázka! Pojďme si to vysvětlit detailně. 😊  

### **Problém s metodami v konstruktoru**  
Když definujeme metody uvnitř **funkce konstruktoru**, každá nová instance dostane **vlastní kopii** této metody, což může být neefektivní z hlediska paměti.

#### **Příklad: Každá instance má svou kopii metody**
```javascript
function Auto(znacka, model) {
    this.znacka = znacka;
    this.model = model;

    // Každá instance dostane svou vlastní kopii této funkce
    this.info = function() {
        console.log(this.znacka + " " + this.model);
    };
}

let auto1 = new Auto("Ford", "Focus");
let auto2 = new Auto("Škoda", "Octavia");

console.log(auto1.info === auto2.info); // false (každá instance má vlastní kopii)
```
🔴 **Problém**: Každý objekt (`auto1`, `auto2`) má svou vlastní verzi funkce `info()`. Když vytvoříme **1000 aut**, tak bude existovat **1000 kopií metody `info()`**, což zbytečně zabírá paměť.

---

### **Řešení: Použití `prototype` pro sdílení metody**
Místo toho, aby každá instance měla svou vlastní kopii metody, můžeme metodu přidat do **prototype** objektu. To znamená, že všechny instance budou sdílet **jednu jedinou** kopii této metody.

```javascript
function Auto(znacka, model) {
    this.znacka = znacka;
    this.model = model;
}

// Metodu přidáme do prototypu
Auto.prototype.info = function() {
    console.log(this.znacka + " " + this.model);
};

let auto1 = new Auto("Ford", "Focus");
let auto2 = new Auto("Škoda", "Octavia");

console.log(auto1.info === auto2.info); // true (oba objekty sdílí stejnou metodu)
```
✅ **Výhody tohoto přístupu**:  
- **Metoda `info()` je uložená pouze jednou** v paměti.  
- **Všechny instance ji sdílejí**, což šetří místo.  
- **Správnější objektově orientovaný přístup**.  

---

### **Třídy (`class`) automaticky používají prototyp**
Pokud použijeme moderní ES6 **třídy (`class`)**, tak metody jsou **automaticky přidány do prototypu**. Nemusíme to dělat ručně jako v předchozím příkladu.

```javascript
class Auto {
    constructor(znacka, model) {
        this.znacka = znacka;
        this.model = model;
    }

    info() {
        console.log(this.znacka + " " + this.model);
    }
}

let auto1 = new Auto("Tesla", "Model S");
let auto2 = new Auto("BMW", "i4");

console.log(auto1.info === auto2.info); // true (metoda je v prototypu)
```

✅ **Výhody `class` oproti funkci konstruktoru**:  
- **Metody jsou automaticky v prototypu** (nejsou duplikovány).  
- **Čitelnější syntaxe**.  
- **Lepší podpora dědičnosti (`extends`)**.  

---

### **Shrnutí**
| **Přístup** | **Metody jsou kde?** | **Kolik kopií metod existuje?** |
|------------|----------------|----------------------|
| Funkce konstruktor (bez `prototype`) | Každá instance | Každá instance má vlastní kopii (neefektivní) |
| Funkce konstruktor + `prototype` | Sdílené v `prototype` | Pouze jedna kopie (efektivní) |
| `class` | Automaticky v `prototype` | Pouze jedna kopie (nejlepší přístup) |

👉 **Doporučení**: Pokud píšeš nový kód, **používej raději `class`**, protože automaticky dělá věci správně. Pokud pracuješ se starým kódem, použij `prototype`, abys metody sdílel efektivně.

Lepší? 😃 Máš k tomu ještě nějaký dotaz? 🚀
