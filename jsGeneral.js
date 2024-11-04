JAVASCRIPT has 8 Datatypes
..............................
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object 

JAVASCRIPT - CONVERT DATA TYPE
.............................
Number("12.2")		//12.2
parseInt("12.2")	//12
parseFloat("12.2")	//12.2

String(10)
const x = 10.1234;
x.toString();	//Nelze: 10.toString(); Lze: (10).toString();
x.toFixed(3);		//Zaokrouhlení na 3 des. místa

JAVASCRIPT - OUTPUT
....................
document.getElementById("elem").innerHTML=""
document.write()
window.alert()
console.log()	console.table()

JAVASCRIPT - WINDOW object
..........................
window.alert("Text");
let boolRes = window.confirm("Do you want to carry on?");
let x = window.prompt("Insert your age: ", 10);		// 10 .. def. value

JAVASCRIPT - basic DOM operations: HTML, CSS
.................................
document.getElementById("demo").innerHTML = "Hello JavaScript"; 
document.getElementById("demo").style.fontSize = "35px"; 

JAVASCRIPT - ARITHMETIC
........................
Operator 	Description
+ 	Addition
- 	Subtraction
* 	Multiplication
/ 	Division
** 	Exponentiation (ES2016)
% 	Modulus (Remainder)
++ 	Increment	//let x=1; x++;
-- 	Decrement

Math.sqrt(81)	//9

JAVASCRIPT - date operations
............................
    const d = new Date();					//Current date and time
    //const d = new Date('2023-05-20');		//Zadání datumu
    console.log(d);							//Date Mon Nov 04 2024 15:36:41 GMT+0100 (středoevropský standardní čas) (objekt typu date)
    console.log(d.toDateString());			//Mon Nov 04 2024
    console.log(d.toISOString());			//2024-11-04T14:36:41.174Z
    console.log(d.toJSON());				//2024-11-04T14:36:41.174Z
    console.log(d.toLocaleDateString());	//4. 11. 2024
    console.log(d.toLocaleTimeString());	//15:36:41
    console.log(d.toLocaleString());		//4. 11. 2024 15:36:41
    console.log(d.toString());				//Mon Nov 04 2024 15:36:41 GMT+0100 (středoevropský standardní čas)
    console.log(d.toTimeString());			//15:36:41 GMT+0100 (středoevropský standardní čas)
    console.log(d.toUTCString());			//Mon, 04 Nov 2024 14:36:41 GMT
    console.log("----------");				
    console.log(d.getFullYear());			//2024
    console.log(d.getMonth());				//10		//month 0-11
    console.log(d.getDate());				//4		//day of the month (1 to 31)
    console.log(d.getDay());				//1		//day of the week (0 to 6) 
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    console.log(d.getMilliseconds());
    console.log("----------");
    d.setFullYear(2020);	
    d.setMonth(3);
    //d.set...								//analogicky dále
