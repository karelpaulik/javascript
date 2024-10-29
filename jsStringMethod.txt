JAVASCRIPT STRING METHODS
Všechny string metody vždy vytváří nový string.
(Nejde upravovat string jako např. úprava array: push(), pop(), ...)

Úprava stringu znamená zadání nové hodnoty stringu:
let s="aaaa"	//definice stringu
s="bbbb"		//úprav stringu
--------------------------------------------------------
TVORBA STRINGU (možné tři typy uvozovek)
..............
let s1="aa\naa"		// \n nový řádek
let s2='bb\nbb'
let s3=`cc\ncc`
s= s1 + s2
s=`Template string ${promenna_1} a ${promenna_2}`

PROPERTY
........
s.length

STRING TO ARRAY
...............
s.split("separator")	// Array to string: join("serparator") 

EXTRAKCE ČÁSTI STRINGU
.....................
s.charAt(5)
s.charCodeAt(5)
s.at(5)				Podobné charAt, ale dovoluje i (-5), tj. pátý od konce
s.slice(start, end)
s.substr(start, length)

ÚPRAVA STRINGU
.......................
s.toLowerCase()	//Uvnitř prázdné závorky
s.toUpperCase()	//Uvnitř prázdné závorky
s.trim()		//Uvnitř prázdné závorky
s.trimStart()	//Uvnitř prázdné závorky
s.trimEnd()		//Uvnitř prázdné závorky
s.padStart(4, "x")	Přidá 4x "x" na začátek
s.padEnd(4, "x")		Přidá 4x "x" na konec
s.replace("co", "za_co")
s.replace(/xxx/i, "za_co")	string/Regexpr	/// xxx/i = case insensitive
s.replaceAll("co", "za_co")	

STRING SEARCH
.............
s.indexOf("str")
s.lastIndexOf("str")
s.search(regExpr)		string/RegExpr	//vrací číselnou pozici
s.match(regExpr)						//vrací pole výskytů

STRING SEARCH - Return true/false:
..................................
s.startsWith("str")		true/false
s.endsWith("str")		 true/false
s.includes("str")		true/false

DALŠÍ
.................
s.repeat(5)			Zopakuje text 5x
--------------------------------------------------------------
Pozn.
.......
Regexp:
/a/		//case sensitive, search only first occurance
/a/i	//case insensitive
/a/g	//global search(search all occurance)

s.indexOf('b')   // returns position 8
s.search('b')    // returns position 8 

let text = "abcdefgh";
let part = text.slice(2,5);	cde
let part = text.slice(2);	cdefgh	//Od pozice do konce
let part = text.slice(-2);	gh		//Od pozice do konce
let part = text.slice(-5,-2); def
