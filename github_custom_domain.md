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

## github - custom domain
```
bedobe.eu		//Sem se nenastavuje: www.bedobe.eu, ale bude fungovat i www.bedobe.eu

Jakmile kontrola pro costom domain proběhne úspěšne, pak zaškrtnout:
Enforce HTTPS
```

## Další
```
Uvnitř *docs* adresáře bylo potřeba vytvořit prázdný soubor:
.nojekyll

Kontrola - po nastavení *cuistom domain* se v adresáři *doc* vytvoří soubor *CNAME* obsahující např. *bedobe.eu*
```
