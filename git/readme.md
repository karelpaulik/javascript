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


