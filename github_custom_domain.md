# Nastavení vlastní domény pro github
DNS servery - tyto se nemění, tzn. pokud např. forpsi, pak jsou zde servery forpsi. Mění se pouze doménové záznamy (A, CNAME)

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
