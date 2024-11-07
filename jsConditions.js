JAVASCRIPT - conditions
........................
Možnosti:
if, else, else if, switch
Operators:
==, ===, !=, !==, <, >, <=, >=
Use the else if statement to specify a new condition if the first condition is false.
//if.................................................................................
let t = 9;

if (t<12) {
    console.log("Before lunch");
} else {
    console.log("After lunch");
}

if (t < 10) {
  console.log("Good morning");
} else if (t < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
//logical operator....................................................................
&&	and
||	or
!	not
..........................
let x = 6, y = 3;
(x < 10 && y > 1);	//true
(x == 5 || y == 5);	//false
!(x == y);			//true
..........................
let h=4;
if (h<7 || h>22) {  //nebo
    console.log("noc");
} else {
    console.log("den");
}
//switch..............................................................................
//Pozn:
//default - není povinné, nemusí být na konci kódu.
//case x - může jich být více za sebu, viz příklad

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
	break;
}

switch (3) {
  case 0:
  case 6:
    console.log("Weeekend");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Wednesday or Thursday or Friday");
    break;
}
//ternary operator.....................................................................
Syntax:
variablename = (condition) ? value1:value2 

Example:
let voteable = (age < 18) ? "Too young":"Old enough";
//....................................................................................
The Nullish Coalescing Operator (??)
let name = null;
let text = "missing";
let result = name ?? text;
//....................................................................................
The Optional Chaining Operator (?.)
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
console.log(car?.name);
