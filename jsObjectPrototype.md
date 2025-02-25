V JavaScriptu je **prototyp** mechanismus, který umožňuje objektům dědit vlastnosti a metody od jiných objektů.  

---

### **1. Jak fungují prototypy?**
Každý objekt v JavaScriptu má svůj **prototyp** – jiný objekt, ze kterého dědí vlastnosti a metody. Pokud se při přístupu k vlastnosti objektu tato vlastnost nenajde, JavaScript ji hledá v jeho **prototypovém řetězci**.  

Příklad:
```javascript
let osoba = {
  pozdrav: function() {
    console.log("Ahoj!");
  }
};

let uzivatel = Object.create(osoba); // Vytvoření objektu s prototypem "osoba"

uzivatel.pozdrav(); // Ahoj! (metoda se hledá v prototypu)
```

V tomto případě objekt `uzivatel` nemá metodu `pozdrav`, ale najde ji ve svém prototypu (`osoba`).

---

### **2. Prototypový řetězec**
Pokud vlastnost nebo metoda neexistuje v objektu, hledá se v jeho **prototypu**, poté v prototypu tohoto prototypu atd., dokud se nedosáhne `Object.prototype` (nejvyšší prototyp), kde řetězec končí.

Příklad:
```javascript
console.log(uzivatel.toString()); 
// toString() se nenajde v uzivatel → hledá se v osoba → není tam → hledá se v Object.prototype
```

---

### **3. Přidání metod do prototypu**
Pro přidání metod do objektů stejného typu můžeme využít **prototype**.

Příklad:
```javascript
function Auto(znacka) {
  this.znacka = znacka;
}

// Přidáme metodu do prototypu všech instancí Auto
Auto.prototype.uvitani = function() {
  console.log(`Vítejte v autě značky ${this.znacka}!`);
};

let auto1 = new Auto("Škoda");
let auto2 = new Auto("Toyota");

auto1.uvitani(); // Vítejte v autě značky Škoda!
auto2.uvitani(); // Vítejte v autě značky Toyota!
```
Metoda `uvitani()` je společná pro všechny instance `Auto`, ale je uložena pouze jednou v `Auto.prototype`.

---

### **4. Vlastní prototypové dědění**
Můžeme vytvářet vlastní řetězce prototypů.

```javascript
function Clovek(jmeno) {
  this.jmeno = jmeno;
}

Clovek.prototype.predstavSe = function() {
  console.log(`Ahoj, jsem ${this.jmeno}!`);
};

// Dědíme z Clovek
function Student(jmeno, obor) {
  Clovek.call(this, jmeno); // Voláme konstruktor rodiče
  this.obor = obor;
}

// Nastavení prototypu
Student.prototype = Object.create(Clovek.prototype);
Student.prototype.constructor = Student; // Oprava konstruktora

Student.prototype.studuje = function() {
  console.log(`${this.jmeno} studuje ${this.obor}.`);
};

let student1 = new Student("Petr", "Informatika");

student1.predstavSe(); // Ahoj, jsem Petr!
student1.studuje(); // Petr studuje Informatika.
```

---

### **5. ES6 a `class` syntaxe**
Moderní JavaScript používá **třídy** (`class`), což je jen hezčí zápis prototypového dědění.

```javascript
class Clovek {
  constructor(jmeno) {
    this.jmeno = jmeno;
  }

  predstavSe() {
    console.log(`Ahoj, jsem ${this.jmeno}!`);
  }
}

class Student extends Clovek {
  constructor(jmeno, obor) {
    super(jmeno); // Volání konstruktoru rodiče
    this.obor = obor;
  }

  studuje() {
    console.log(`${this.jmeno} studuje ${this.obor}.`);
  }
}

let student2 = new Student("Eva", "Matematika");

student2.predstavSe(); // Ahoj, jsem Eva!
student2.studuje(); // Eva studuje Matematika.
```
Tento zápis je ekvivalentní k předchozímu příkladu s `function`, ale je čitelnější.

---

### **Shrnutí**
✅ Každý objekt v JavaScriptu má **prototyp**, což umožňuje dědičnost.  
✅ Prototypové metody se sdílejí mezi všemi instancemi, čímž šetří paměť.  
✅ Pomocí `Object.create()` můžeme vytvořit objekt s konkrétním prototypem.  
✅ `class` syntaxe v ES6 usnadňuje práci s prototypovým děděním.  

Chceš nějaký konkrétní příklad nebo něco víc vysvětlit? 😊

---

Ano, ale s určitými omezeními.  

### **Vlastnosti v prototypu vs. v instanci**  
1. **Metody a sdílené vlastnosti** se obvykle dávají do **prototypu**, protože se sdílejí mezi všemi instancemi.  
2. **Individuální vlastnosti** (např. `this.jmeno`) se nastavují v **konstruktoru**, aby každá instance měla svou vlastní hodnotu.

---

### **Definování vlastnosti v prototypu**
Vlastnosti lze do prototypu přidat přímo:
```javascript
function Osoba(jmeno) {
  this.jmeno = jmeno; // Unikátní pro každou instanci
}

Osoba.prototype.vek = 30; // Sdílená vlastnost

let osoba1 = new Osoba("Petr");
let osoba2 = new Osoba("Eva");

console.log(osoba1.vek); // 30
console.log(osoba2.vek); // 30

osoba1.vek = 40; // Přidá **novou** vlastnost do objektu osoba1, nepropisuje prototyp!

console.log(osoba1.vek); // 40 (instance má vlastní verzi)
console.log(osoba2.vek); // 30 (zůstává sdílená)
console.log(Osoba.prototype.vek); // 30 (prototyp se nezměnil)
```
➡ **Problém:** Pokud vlastnost změníme v instanci (`osoba1.vek = 40`), vytvoří se v této instanci **nová vlastnost**, místo aby změnila prototypovou.

---

### **Použití `Object.defineProperty()`**
Pokud chceme definovat vlastnost přímo na prototypu, ale zároveň ji **chránit před přepsáním**, můžeme použít `Object.defineProperty()`:

```javascript
function Auto(znacka) {
  this.znacka = znacka;
}

Object.defineProperty(Auto.prototype, "typ", {
  value: "osobní",
  writable: false, // Nelze změnit
  enumerable: true, // Zobrazí se při výpisu
  configurable: false // Nelze smazat
});

let auto1 = new Auto("Škoda");
let auto2 = new Auto("Toyota");

console.log(auto1.typ); // osobní
console.log(auto2.typ); // osobní

auto1.typ = "nákladní"; // Nelze změnit (neprovede se)
console.log(auto1.typ); // stále "osobní"
```
➡ **Výhoda:** Vlastnost **zůstane stejná pro všechny instance** a **nelze ji přepsat**.

---

### **Alternativa: Gettery a Settery v prototypu**
Pokud chceme řídit přístup k vlastnosti, můžeme použít **gettery a settery**:

```javascript
function Clovek(jmeno, rokNarozeni) {
  this.jmeno = jmeno;
  this.rokNarozeni = rokNarozeni;
}

Object.defineProperty(Clovek.prototype, "vek", {
  get: function() {
    let aktualniRok = new Date().getFullYear();
    return aktualniRok - this.rokNarozeni;
  }
});

let osoba3 = new Clovek("Lukáš", 1995);
console.log(osoba3.vek); // Dynamicky vypočítaný věk
```
➡ **Výhoda:** `vek` není pevná hodnota, ale **vypočítává se dynamicky** při každém přístupu.

---

### **Shrnutí**
✅ **Ano, lze definovat vlastnosti v prototypu**, ale jsou **sdílené** mezi instancemi.  
✅ **Přímé přiřazení (`Osoba.prototype.vek = 30`)** vytvoří sdílenou vlastnost, ale instance ji může přepsat.  
✅ **`Object.defineProperty()`** umožní vytvořit vlastnost, kterou nelze přepsat.  
✅ **Gettery/settery** umožňují dynamické vlastnosti.  

👉 **Obecně se vlastnosti nastavují v konstruktoru** a **metody do prototypu**.
