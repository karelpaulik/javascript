# Nastavení vlastní domény pro github
DNS servery - tyto se nemění, tzn. pokud např. forpsi, pak jsou zde servery forpsi. Mění se pouze doménové záznamy (A, CNAME)

## Jak dlouho to trvá
Po nastavení viz. níže trvalo 1 den, než v *github pages* proběhl *DNS check successful*.

Ale samotný přístup na github pages s nastavenou doménou fungoval během 1-2 hodin. Ale jen jako http (ne https).

## registrátor - forpsi
```
Hostname	TTL	Typ	Hodnota	
bedobe.eu	1800	A	185.199.108.153	
bedobe.eu	1800	A	185.199.109.153
bedobe.eu	1800	A	185.199.110.153	
bedobe.eu	1800	A	185.199.111.153	
www.bedobe.eu	1800	CNAME	karelpaulik.github.io	//Pozor, sem se nenastavuje: karelpaulik.github.io/repozitar
```

### Kontrola nastavení v cmd
```
nslookup mojedomena.cz
nslookup mojedomena.cz 8.8.8.8 (neptej se svého routrou, ale googlu) !!!Zde bez www
nslookup -type=a mojedomena.cz 8.8.8.8  (Tento příkaz odpovídá příkazu bez "-type". Tj. pokud není -type, pak stejné jako -type=a)
nslookup -type=cname www.bedobe.eu 8.8.8.8  !!!Pozor - zde je www
nslookup -type=ns bedobe.eu 8.8.8.8
nslookup -type=soa bedobe.eu 8.8.8.8

```

## github - custom domain
```
bedobe.eu		//Sem se nenastavuje: www.bedobe.eu
```

## Další
```
Uvnitř *docs* adresáře bylo potřeba vytvořit prázdný soubor:
.nojekyll

Kontrola - po nastavení *cuistom domain* se v adresáři *doc* vytvoří soubor *CNAME* obsahující např. *bedobe.eu*
```

## https
Jakmile proběhne úspěšně kontrola pro *custom domain* pak zaškrtnout **Enforce HTTPS**

Než naběhne https to může zase trvat.

### refresh po naběhnutí certifikátu
I po naběhnutí certifikátu může nějakou chvíli trvat, než v běžícím okně začne web fungovat pod https.

Možnosti refresh:
```
F5
ctrl + F5
F12 -> Podržet LMB nad obnovovací šipkou (vedle adresního řádku). Objeví se: Vymazání mezipaměti a opětovné načtení stránky. !!! Nefunguje bež F12
cmd as admin: ipconfig /flushdns

Nejspolehlivější je ale:
Nové anonymní okno (Ctrl + shift +N)
```
