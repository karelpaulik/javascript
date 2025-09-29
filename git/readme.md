# GIT

## Nápověda
```
git help <příkaz>
git <příkaz> --help
man git-<příkaz>

Např.
git help config
```

## Konfigurace
### Výpis nastavení
```
git config --list  // Zobrazení nastavení
git config --list --show-origin  //Ze vídím, z které úrovně je které nastavení.
local: file:.git/config
global: file:C:/Users/karel.paulik/.gitconfig
system: file:C:/Users/karel.paulik/AppData/Local/Programs/Git/etc/gitconfig 

Git má 3 úrovně nastavení, které se navzájem přepisují (lokální má nejvyšší prioritu):
-local
-global
-system
git config --list --local
git config --list --global
git config --list --system
```

### Úprava nastavení
```
Základní nastavení:
git config --uroven <promenna> "<hodnota>"

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -nosession"
```

## Inicializace/klonování repozitáře
```
Inicializace:
git init

Klonování existujícího:
git clone <url-repozitare>
```

## Sledování změn
```
git status	Zobrazí stav pracovního adresáře a staging area. Ukáže, které soubory jsou změněné, nesledované (untracked) nebo připravené k commitu.
git add <soubor>	Přidá konkrétní soubor do staging area (připraví ho k commitu).
git add .	Přidá všechny změněné a nesledované soubory v aktuálním adresáři a podadresářích do staging area.
git diff	Zobrazí rozdíly mezi pracovním adresářem a staging area.

Použití diff:
git diff
git diff --staged

git diff <prvni_bod> <druhy_bod>
# Např.: git diff HEAD HEAD^   (Rozdíl mezi aktuálním a předposledním commitem)
# Např.: git diff main feature-x (Rozdíl mezi větvemi main a feature-x)

Pozn: HEAD vs. HEAD^
HEAD  Ukazatel na: Aktuální (poslední) commit
HEAD^  Ukazatel na: Předchozí (předposlední) commit
```

## Ukládání změn
```
git commit
git commit -m "Popis commitu"
```

## Prohlížení historie a detailů commitů
```
git log  Zobrazí historii commitů
git log --oneline

git show Zobrazí detailní obsah (metadata a diff) jednoho commitu.
```

## Větve
```
git branch	Vypíše všechny lokální větve a označí tu aktuální.
git branch <nazev_vetve>	Vytvoří novou větev s daným názvem.
git checkout <nazev_vetve>	Přepne se na existující větev.
git checkout -b <nazev_vetve>	Vytvoří novou větev a okamžitě se na ni přepne.
git merge <nazev_vetve>	Sloučí (merge) zadanou větev do aktuální větve.
git branch -d <nazev_vetve>	Smaže lokální větev. (Jen pokud byla sloučena.)

Výpis větví
git branch    Výpis lok. větví
git branch -r  Výpis vzdálených větví
git branch -a  Výpis všech větví
```
**Pozn.** Merge znamená proveď merge do aktuální větve. Ne proveď merge větve, která je aktuální.

Tzn. Před merge se většinou dává **git checkout main**

### Typy merge
```
--ff  Fast forward, není nutno zadávat, je to Default
--no-ff  No fast forward
--ff-only
```

1. Fast-Forward Merge (Rychlé Posunutí)

* **Kdy nastává:** K Fast-Forward merge dojde, pokud **cílová větev** (např. `main`) od chvíle, kdy z ní byla **odbočena zdrojová větev** (např. `feature-x`), **neměla žádné nové commity**.
* **Jak funguje:** Git pouze **posune ukazatel** cílové větve na poslední commit zdrojové větve.
* **Historie:** **Nevytvoří se žádný nový merge commit.** Historie zůstává lineární a vypadá, jako by práce na větvi `feature-x` byla přímým pokračováním větve `main`. 
* **Klíčová vlastnost:** Neukládá informaci o tom, že se jednalo o samostatnou větev, což může ztížit pochopení, kdy se daná sada změn vyvíjela odděleně.

2. No-Fast-Forward Merge (`git merge --no-ff`) ⚠️

Příkaz **`git merge --no-ff`** je **volba**, kterou vynutíte vytvoření **Merge Commit** **vždy**, i když by jinak bylo možné provést Fast-Forward merge.

* **Kdy nastává:** Použijete, když chcete explicitně zachovat záznam o existenci a sloučení větve, i když by Git mohl provést Fast-Forward.
* **Účel:** **Zachování historického kontextu.** Nový merge commit slouží jako "milník", který jasně říká: "Zde se začlenila celá větev `feature-x`."
* **Doporučení:** Ve většině moderních workflow (např. Gitflow) je tato volba **doporučena** pro sloučení do hlavních větví, protože udržuje historii čistou a srozumitelnou.

3. Fast-Forward Only
* Příznak --ff-only (Fast-Forward Only) je speciální volba, kterou se Git merge příkaz instruuje, aby sloučení provedl pouze tehdy, pokud je možný Fast-Forward Merge. 🛑
* Pokud Fast-Forward Merge možný není, Git sloučení neprovede a namísto toho vrátí chybu.

### git remote show origin
Příkaz **git remote show origi**n sice nevypisuje jen seznam větví, ale poskytuje komplexní přehled o vzdáleném repozitáři origin, včetně:
- Seznamu vzdálených větví (Remote branches).
- Které lokální větve sledují které vzdálené.
- Jaké akce (jako je push a pull) Git provede pro každou větev.

## Práce se vzdáleným repozitářem
```
git remote -v	Zobrazí seznam vzdálených repozitářů.
git push origin <nazev_vetve>	Nahraje (push) lokální commity na vzdálený repozitář (např. origin je obvyklý název pro hlavní vzdálený server).
git pull origin <nazev_vetve>	Stáhne (fetch a merge) a aplikuje změny z dálky do lokální větve.
git fetch	Stáhne změny z dálky, ale neaplikuje je na lokální větev.
```
**Zobrazení změn po: git fetch**

Jakmile provedete příkaz **git fetch**, stáhnete nové commity do své lokální kopie vzdálené větve (např. do origin/main), aniž by se změnila vaše lokální pracovní větev.

Tyto stažené změny můžete zobrazit několika způsoby, především pomocí příkazů **git log** a **git diff**.
```
git log
git diff

Porovnání s aktuální větví
git log <lokalni_vetev>..origin/<nazev_vetve>
# Např.: git log main..origin/main

Zobrazení stažených větví (log)
git log origin/<nazev_vetve>
# Např.: git log origin/main
```


### Rozdíl mezi git fetch a git pull
```
git fetch	Stáhne commity ze vzdáleného repozitáře, ale neaplikuje je. Cíl změn:	Vzdálená sledovací větev (origin/main)	Když chcete vidět novinky na serveru, ale nechcete je zatím začlenit do své práce.
git pull	Je zkratka pro git fetch následované git merge (sloučením). Cíl změn:	Lokální pracovní větev (main)	Když chcete okamžitě stáhnout a aplikovat (sloučit) vzdálené změny do vaší aktuální lokální větve.
```
pull = fetch + merge

## git remote show origin
Příkaz **git remote show origi**n sice nevypisuje jen seznam větví, ale poskytuje komplexní přehled o vzdáleném repozitáři origin, včetně:
- Seznamu vzdálených větví (Remote branches).
- Které lokální větve sledují které vzdálené.
- Jaké akce (jako je push a pull) Git provede pro každou větev.


# Detached

**Detached HEAD** (v překladu "odpojená hlava") je v Gitu stav, kdy ukazatel **`HEAD`** **neukazuje na název větve**, ale **přímo na konkrétní commit** v historii.

Jde o speciální stav, který není chybou, ale indikuje, že pracujete v režimu, kde vaše nové commity nebudou automaticky přidány na konec žádné pojmenované větve.

-----

## Co je to `HEAD`

Nejprve je potřeba pochopit, co je `HEAD`:

  * **`HEAD`** je ukazatel (pointer), který v Gitu určuje, na jakém revizi (commit) se aktuálně nachází váš **pracovní adresář**. Určuje tedy to, jaká verze souborů je ve vašem projektu právě načtená.
  * **Normální stav (Attached HEAD):** Obvykle `HEAD` ukazuje na **název větve** (např. `main` nebo `feature-x`). Když pak uděláte nový commit, Git automaticky posune název větve, aby ukazoval na tento nový commit, a `HEAD` ho sleduje.

-----

## Co znamená `Detached HEAD`

  * **Odpojený stav:** Nastane, když použijete příkaz `git checkout` (nebo `git switch`) a přepnete se **přímo na ID commitu** (hash) nebo **tag**.

      * *Příkazy, které způsobí Detached HEAD:*
          * `git checkout <commit_hash>` (např. `git checkout 56a4e5c`)
          * `git checkout <tag_name>` (např. `git checkout v1.0`)
          * `git checkout origin/main` (tj. na vzdálenou referenci)

  * **Důsledek:** `HEAD` nyní ukazuje na daný commit. Pokud v tomto stavu vytvoříte nové commity, nebudou patřit žádné větvi. Vytvoří se takzvaná **anonymní (bezejmenná) větev**.

  * **Riziko ztráty:** Tyto anonymní commity se **snadno ztratí**, jakmile přepnete `HEAD` zpět na pojmenovanou větev (např. `git checkout main`). Budou v podstatě "viset ve vzduchu" a Git je může časem uklidit (garbage collection), pokud je nenajdete v `git reflog`.

-----

## Kdy se Detached HEAD používá

Tento stav není k zahození, je užitečný pro:

1.  **Kontrolu historie:** Chcete se podívat, jak vypadal kód v nějakém konkrétním commitu z minulosti, např. pro testování chyby.
2.  **Experimentování:** Chcete zkusit nějakou rychlou opravu nebo myšlenku bez ovlivnění stávajících větví. Pokud se experiment nepovede, stačí přepnout zpět, a vaše změny zmizí.
3.  **Prohlížení tagů:** Tagy (např. verze vydání) jsou fixní a nelze je měnit, takže při jejich prohlížení se automaticky dostanete do Detached HEAD.

-----

## Jak se dostat ven (a uložit změny)

Pokud jste v Detached HEAD stavu udělali užitečné změny, které chcete zachovat, **musíte vytvořit novou větev**, aby se k nim připojila:

1.  **Vytvořte a přepněte se na novou větev:**

    ```bash
    git checkout -b nova-zachrana-vetev
    ```

    Tento příkaz vytvoří novou větev přesně v místě, kde je nyní váš **Detached HEAD** (včetně vašich nových commitů), a připojí k ní ukazatel `HEAD`. Nyní jste v normálním stavu a můžete pokračovat v práci nebo tuto větev sloučit (merge) do `main`.

2.  **Pro pouhé opuštění (bez uložení změn):**
    Pokud nechcete změny, které jste v Detached HEAD stavu udělali, stačí se přepnout zpět na libovolnou existující větev.

    ```bash
    git checkout main
    ```

    Nové, neuložené commity se tímto odpojí a budou zapomenuty.

    **Vzdálená větev** (anglicky **Remote Branch**) není ve skutečnosti větev, na které byste přímo pracoval/a, ale je to lokální, read-only **reference** (ukazatel) na stav větví na vzdáleném repozitáři (např. na GitHubu).

Správně se nazývá **vzdálená sledovací větev** (*Remote-tracking Branch*).

---
# Vzdálené větve

## 1. Co vzdálená větev představuje

Vzdálená větev vám umožňuje sledovat, co se děje na serveru. Její název má vždy formát **`<název_remote>/<název_větve>`**, například:

| Vzdálená větev | Co přesně ukazuje |
| :--- | :--- |
| **`origin/main`** | Poslední stav větve **`main`** na vzdáleném serveru pojmenovaném **`origin`**. |
| **`upstream/dev`** | Poslední stav větve **`dev`** na vzdáleném serveru pojmenovaném **`upstream`**. |

* **Pravidlo:** Jakmile stáhnete (fetch) změny ze serveru, Git aktualizuje tyto vzdálené sledovací větve ve vašem lokálním repozitáři.

---

## 2. Klíčové vlastnosti

* **Read-Only:** Nemůžete se na ni přímo přepnout a commitovat do ní. Pokud byste to zkusil/a (`git checkout origin/main`), Git vás přepne do stavu **Detached HEAD**.
* **Synchronizace:** Její hlavní funkcí je sloužit jako **bod synchronizace**. Ukazuje vám, kde se nachází konec dané větve na serveru *v porovnání* s vaší lokální verzí.

### Jak se liší od lokální větve?

| Vlastnost | Lokální větev (`main`) | Vzdálená sledovací větev (`origin/main`) |
| :--- | :--- | :--- |
| **Commitování** | Ano, commity jdou do ní. | Ne, je read-only. |
| **Kde existuje** | Pouze na vašem lokálním počítači. | Pouze na vašem lokálním počítači (jako reference), ale odráží server. |
| **Aktualizace** | Manuálně pomocí `git pull` nebo `git merge`. | Automaticky pomocí **`git fetch`** nebo `git pull`. |
| **Účel** | Vývoj a práce s kódem. | Sledování a porovnávání se serverem. |


# git push vs. git push origin <nazev_vetve>

## 1\. `git push origin <nazev_vetve>` (Explicitní a vždy funguje) ✅

Tento příkaz je **explicitní** a vždy funguje, protože Gitu **přímo říkáte, co a kam má nahrát**.

  * **Co:** **Lokální větev** s názvem `<nazev_vetve>`.
  * **Kam:** Vzdálený repozitář s názvem **`origin`**.
  * **Použití:**
      * Když nahráváte **nově vytvořenou větev**, která na vzdáleném repozitáři ještě neexistuje.
      * Když chcete nahrát **jinou lokální větev**, než na které se právě nacházíte.
      * Když chcete být **maximálně přesný** ohledně toho, co nahráváte.

### První push nové větve

Při prvním nahrávání nové větve musíte obvykle použít variantu, která nastaví sledování:

```bash
git push -u origin <nazev_vetve>
# (-u je zkratka pro --set-upstream)
```

Tento příkaz nahraje větev a nastaví váš lokální repozitář tak, aby **příště** mohl používat zkrácený příkaz `git push`.

-----

## 2\. `git push` (Zkrácený a závislý na nastavení) 💡

Tento zkrácený příkaz funguje, pouze pokud je **aktuální lokální větev** nastavená tak, aby sledovala (trackovala) konkrétní vzdálenou větev.

  * **Co:** Git nahraje vaši **aktuální lokální větev**.
  * **Kam:** Do **vzdálené větve, kterou lokální větev sleduje** (např. pokud lokální `feature-a` sleduje vzdálenou `origin/feature-a`).
  * **Použití:**
      * Po prvním push s nastavením sledování (`-u`).
      * Když chcete rychle nahrát změny z větve, na které právě pracujete.

### Kdy selže?

Pokud vaše aktuální lokální větev nemá nastavenou žádnou vzdálenou sledovací větev (tj. neví, *kam* se má pushovat), příkaz **`git push`** selže a vyzve vás k použití delšího příkazu s argumentem `--set-upstream`.

-----

## Shrnutí rozdílů

| Příkaz | Explicitní cíl? | Co se nahrává? | Kdy použít? |
| :--- | :--- | :--- | :--- |
| **`git push origin <nazev_vetve>`** | **Ano** | Konkrétní zadaná lokální větev. | **Kdykoliv,** pro nové nebo jiné větve. |
| **`git push`** | **Ne** (je inferován) | Aktuální lokální větev. | Když je **nastaveno sledování** (upstream). |

## Zjištění, která vzdálená větev se sledovaná

### 1\. Použití `git status`

Příkaz `git status` je nejužitečnější, protože vám okamžitě ukáže stav sledování pro aktuální větev, stejně jako počet commitů, o které se liší od vzdáleného repozitáře.

```bash
git status
```

### Příklad výstupu:

Pokud je sledování nastaveno, uvidíte zprávu, která vypadá zhruba takto:

```
On branch main
Your branch is up to date with 'origin/main'. 
nothing to commit, working tree clean
```

nebo:

```
On branch feature/nova-funkce
Your branch is ahead of 'origin/feature/nova-funkce' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

Zde jasně vidíte, že aktuální lokální větev (`main` nebo `feature/nova-funkce`) sleduje vzdálenou větev **`origin/main`** nebo **`origin/feature/nova-funkce`**.

## Origin
**`origin`** je ve světě Gitu **standardní alias** (přezdívka) pro **vzdálený repozitář**, ze kterého jste projekt původně naklonoval/a (stáhl/a).

Jednoduše řečeno, je to zkrácený název, který Git používá pro odkaz na server, kde žije "hlavní" kopie vašeho kódu (např. na GitHubu, GitLabu apod.).

Jak zjistím origin:
- git remote -v

Příklad výstpu:
```
origin  https://github.com/uzivatel/muj-projekt.git (fetch)
origin  https://github.com/uzivatel/muj-projekt.git (push)
```

## Detaily o `origin`

### 1\. Alias, ne server

`origin` není název serveru, ale **místní zástupce** (lokálně uložené jméno), který ukazuje na plnou URL adresu vašeho vzdáleného repozitáře.

  * **Příklad:** Místo abyste neustále psali `git push https://github.com/muj-profil/muj-projekt.git main`, napíšete jen `git push origin main`.

### 2\. Automatické nastavení

Když použijete příkaz **`git clone <URL>`**, Git automaticky provede dvě věci:

1.  Vytvoří lokální kopii repozitáře.
2.  Nastaví alias **`origin`** tak, aby ukazoval na danou `<URL>`.

### 3\. Vztah k větvím

Jakmile je `origin` nastaven, používá se pro referenci na vzdálené větve, které jste už viděl/a:

  * **`origin/main`**: Představuje stav větve `main` tak, jak je uložena na vzdáleném serveru (označovaném `origin`).

### 4\. Změna názvu

Název `origin` je sice standard, ale není povinný. Můžete přidat i další vzdálené repozitáře (např. z forků) pod jinými názvy, například **`upstream`**:

```bash
git remote add upstream <URL_hlavniho_repozitáře>
```

# VSCODE
## Sync Changes
Příkaz "Sync Changes" (Synchronizovat změny) ve VS Code je zkratka, která kombinuje dva základní Git příkazy pro synchronizaci s vzdáleným repozitářem (origin):
```
git pull (nejprve stáhnout změny z dálky)
git push (poté nahrát vaše lokální commity na dálku)
```
