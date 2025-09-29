# GIT

## Nápověda
```
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
