# Nastavení domény

## Nutno rozlišit dvě věci (různé pojmenování podle providera): 
- **Forpsi:** nastavení DNS serverů vs. Editace DNS záznamů
- **AWS:** Registered Domains vs. Hosted zone
1. První část se týká jmenných serverů
2. Druhá část se týká doménových záznamů zaznamů

!!! Jmenné servery se nastavují uvnitř části "jedna".

!!! Uvnitř části "dva" se sice dají nastavit záznamy typu NS (u AWS ano, u Forpsi ne), ale tyto záznamy se nikdy needitují !!!

Pokud by byl registrátor jiný než kde se hostují servery, pak je důležitá část "jedna" a část "dva" se ignoruje. (Např. registrátor je AWS, ale hosting běží u google)

## Typy doménových záznamů
A - adress record. 

Mapuje název domény nebo subdomény na IPv4 adresu. Je to nejběžnější a nejdůležitější záznam pro směřování webových stránek.
vasedomena.cz -> 192.0.2.1

AAAA - IPv6 address record

Mapuje název domény nebo subdomény na IPv6 adresu. Funguje stejně jako A záznam, ale pro novější a delší formát IP adres.
vasedomena.cz -> 2001:db8::1

CNAME - Canonical Name record

Vytváří alias (přezdívku) pro jiný název domény. Umožňuje jedné doméně či subdoméně odkazovat se na kanonický (hlavní) název.
www.vasedomena.cz -> vasedomena.cz

NS - name server record

Identifikuje autoritativní jmenné servery pro danou doménu. Tyto servery ukládají všechny ostatní DNS záznamy a jsou zodpovědné za jejich poskytování.
např. vasedomena.cz je spravována servery ns1.registrar.net a ns2.registrar.net

SOA - Start of Authority Record

Obsahuje důležité administrativní informace o zóně, jako je primární jmenný server, e-mail administrátora, sériové číslo zóny (pro zjištění změn) a parametry pro obnovení (TTL, Refresh, Retry, Expire). V každé zóně musí být právě jeden.

MX - mail exchange record

**NS a SOA zaznamy - jdou ruku v ruce.**

## Záznam typu SOA
SOA (Start Of Authority record) je speciální záznam, který se musí v každém zónovém souboru vyskytovat právě jednou. Jedná se o jakousi hlavičku, která obsahuje následující informace:

- MNAME – název primárního DNS serveru pro danou zónu
- RNAME – kontakt na správce zónového souboru (e-mailová adresa s tečkou místo znaku @)
- SERIAL – sériové číslo zóny (číselný údaj udávající verzi zónového souboru)
- REFRESH – počet sekund mezi kontrolami sériového čísla
- RETRY – počet sekund pro další pokus o zjištění sériového čísla, pokud se předchozí pokus nezdařil
- EXPIRE – počet sekund, po kterém zóna, jejíž sériové číslo se nepodařilo zjistit, expiruje (sekundární DNS server by ji měl vyřadit ze svých záznamů)
- MINIMUM – aktuálně TTL pro negativní cachování (doba, po kterou si cachovací DNS servery pamatují, že nějaký záznam neexistuje)

Např.

ns-1528.awsdns-63.org. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400

awsdns-hostmaster.amazon.com. -> awsdns-hostmaster@amazon.com (skutečná adresa)

# Jmenné servery:

- **Rekurzivní DNS Server (Resolver)** Funkce: Klient v procesu DNS. Přijímá dotaz od uživatele a provádí za něj celý sled dotazů (pátrání), dokud nezíská IP adresu. Dále funguje jako vyrovnávací paměť (cache).
- **Autoritativní Jmenný Server** Funkce: Držitel a zdroj pravdy pro konkrétní doménovou zónu. Odpovídá na dotazy pouze pro zóny, za které je určený. Tyto servery tvoří DNS hierarchii a jsou tři úrovně:

1. Rekurzivní resolver (server poskytovatele, prostředník mezi klientem a autoritativními servery) Slouží také jako cache.
2. Autoritativní jmenné servery
	- Konřenové
	- TLD (Top level domain)
	- Zónové (Konečný)
	
- Kořenový Server (Root) 🌳	Zná servery pro všechny TLD (např. .com, .cz).
- TLD Server	Zná servery pro všechny domény pod danou TLD (např. mojedoména.cz).
- Zónový/Konečný Server	Zná konkrétní A záznamy (IP adresy) domény.

Tok dotazu:

Shrnutí toku dotazuCelý proces se pohybuje směrem dolů v hierarchii:

Rekurzivní Resolver -> Root Server -> TLD Server -> Zónový Autoritativní Server -> Rekurzivní Resolver -> Prohlížeč
