Kódování znaků je způsob, jakým jsou textové znaky reprezentovány v počítači. Existuje několik hlavních kódování:

### 1. **ASCII (American Standard Code for Information Interchange)**
   - Používá 7 bitů na znak (128 znaků).
   - Obsahuje základní latinskou abecedu, číslice a speciální znaky.
   - Nepodporuje diakritiku ani jiné než anglické znaky.

### 2. **Extended ASCII (rozšířený ASCII)**
   - Používá 8 bitů (256 znaků).
   - Přidává národní znaky (např. česká diakritika v kódování Windows-1250 nebo ISO 8859-2).

### 3. **UTF (Unicode Transformation Format)**
   Unicode je univerzální kódování pokrývající téměř všechny znaky všech jazyků. Existují různé varianty:

   - **UTF-8** (nejpoužívanější)
     - Variabilní délka (1–4 bajty na znak).
     - Kompatibilní s ASCII (znaky 0–127 mají stejnou reprezentaci).
     - Efektivní pro texty s převahou latinky.
  
   - **UTF-16**
     - Používá 16 bitů (2 bajty) nebo 32 bitů na znak.
     - Efektivnější než UTF-8 pro asijské znaky, ale ne pro anglický text.
  
   - **UTF-32**
     - Pevná délka 4 bajty na znak.
     - Neefektivní kvůli velké spotřebě paměti.

### 4. **Další kódování**
   - **ISO 8859-x** (např. ISO 8859-1 pro západní Evropu, ISO 8859-2 pro střední Evropu).
   - **Windows-125x** (např. Windows-1250 pro střední Evropu).
   - **KOI8-R** (pro ruštinu).
   - **Shift JIS, EUC-JP** (pro japonštinu).

Nejpoužívanější je dnes **UTF-8**, protože je univerzální a kompatibilní s ASCII.



## **📝 `TextEncoder` a `TextDecoder` v JavaScriptu**  
V moderním JavaScriptu slouží **`TextEncoder`** a **`TextDecoder`** k převodu mezi řetězci (`string`) a binárními daty (`Uint8Array`).  

🔹 **`TextEncoder`**: Převádí řetězec na **UTF-8 bajty** (`Uint8Array`).  
🔹 **`TextDecoder`**: Převádí **UTF-8 bajty zpět na řetězec**.  

---

## **1️⃣ `TextEncoder` → Převod textu na bajty (UTF-8)**
📌 **Použití:**  
```js
const encoder = new TextEncoder();
const encoded = encoder.encode("Hello 😊");

console.log(encoded);  
// Uint8Array(10) [72, 101, 108, 108, 111, 32, 240, 159, 152, 138]
```
🔹 **Každý znak je převeden do odpovídajících bajtů v UTF-8.**  
🔹 `"H"` (72), `"e"` (101), `"l"` (108) jsou **1bajtové znaky**.  
🔹 `"😊"` (`U+1F60A`) se kóduje jako **4 bajty**: `[240, 159, 152, 138]`.  

---

## **2️⃣ `TextDecoder` → Převod bajtů zpět na text**
📌 **Použití:**  
```js
const decoder = new TextDecoder();
const decoded = decoder.decode(encoded);

console.log(decoded);  
// "Hello 😊"
```
🔹 **Správně dekóduje celý řetězec včetně emoji.**  

---

## **3️⃣ Specifikace kódování (`UTF-8`, `ISO-8859-1` atd.)**
`TextEncoder` vždy kóduje do **UTF-8** (jiné možnosti nemá).  
Ale **`TextDecoder`** podporuje více kódování:  
```js
const decoderISO = new TextDecoder("iso-8859-1");
```

---

## **🚀 Shrnutí rozdílů**
| Funkce           | Co dělá?                        | Výstup |
|-----------------|--------------------------------|--------|
| `TextEncoder`   | Text → UTF-8 bajty (`Uint8Array`) | `[72, 101, 108, 108, 111, 240, 159, 152, 138]` |
| `TextDecoder`   | UTF-8 bajty → Text             | `"Hello 😊"` |

✅ **Použijte `TextEncoder` a `TextDecoder` při práci s binárními daty v síti, souborech nebo Web API.**
