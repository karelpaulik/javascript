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
git log  Zobrazí historii commitů
git log --oneline
```
## Ukládání změn
```
git commit
git commit -m "Popis commitu"
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
### Rozdíl mezi git fetch a git pull
```
git fetch	Stáhne commity ze vzdáleného repozitáře, ale neaplikuje je. Cíl změn:	Vzdálená sledovací větev (origin/main)	Když chcete vidět novinky na serveru, ale nechcete je zatím začlenit do své práce.
git pull	Je zkratka pro git fetch následované git merge (sloučením). Cíl změn:	Lokální pracovní větev (main)	Když chcete okamžitě stáhnout a aplikovat (sloučit) vzdálené změny do vaší aktuální lokální větve.
```
pull = fetch + merge

# VSCODE
## Sync Changes
Příkaz "Sync Changes" (Synchronizovat změny) ve VS Code je zkratka, která kombinuje dva základní Git příkazy pro synchronizaci s vzdáleným repozitářem (origin):
```
git pull (nejprve stáhnout změny z dálky)
git push (poté nahrát vaše lokální commity na dálku)
```

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
