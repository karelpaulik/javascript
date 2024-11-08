JAVASCRIPT - Loops
..................
for,
for/in
for/of
while
do/while
array.forEach(fce)
//for..........................................
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.

//Basic
for (let i=0; i<10; i++) {
    console.log(i);
}

//Multiple expression allowed
for (let i=0, j=0; i<10 && j<10; i++, j+=2) {
    console.log(i, j);
}

//Expression 1,3 can be omitted
let i=0;
for (; i<10; ) {
    console.log(i);
    i++;
}

//Expression 2 can be ommitted, then "break;" must be used
for (let i=0;; i++) {
    console.log(i);
    if (i>5) {break;}
}
//for-in----------------------------------------------------------------------
The JavaScript for in statement loops through the properties of an Object:

const person = {fname:"John", lname:"Doe", age:25};

let keys = "";
let values = "";
for (let x in person) {
  keys += x +  " "
  values += person[x] + " ";
} 
console.log(keys);      //fname lname age 
console.log(values);    //John Doe 25 
//array.forEach--------------------------------------------------------------
myFunction(value, index, array)

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(x => console.log(x));

const numbers = [45, 4, 9, 16, 25];
numbers.forEach((x,y,z) => {
    console.log(x,y,z);
});
//return:
//45 0 [45, 4, 9, 16, 25]
//4 1 [45, 4, 9, 16, 25]
//9 2 [45, 4, 9, 16, 25]
//16 3 [45, 4, 9, 16, 25]
//25 4 [45, 4, 9, 16, 25]



//for-of--------------------------------------------------------------------
!!! POZN. THERE ARE OFTEN BETTER WAY HOW TO DO THIS !!!!
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

for (variable of iterable) {
  // code block to be executed
}

//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + " ";
}
console.log(text);
//Better way do the same: cars.forEach(x=> text += x + " ");

//Looping over a String
let language = "JavaScript";
let text = "";
for (let x of language) {
text += x + " ";
}
console.log(text);
//Better way do the same: language.split("").forEach(x => text += x + " ");
//while--------------------------------------------------------------------
POZN: Podmínka se kontroluje před provedením kódu, tzn. první krok ani nemusí proběhnout.
The while loop loops through a block of code as long as a specified condition is true.

//syntax
while (condition) {
  // code block to be executed
}

let i = 0;
while (i < 10) {
  console.log(i);	//Result: 0 .. 9
  i++;
}
//do-while-------------------------------------------------------------------
POZN. ROZDÍL OPROTI "while": První krok provede vždy. Podmínka se kontroluje až po první kroku
The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

//syntax
do {
  // code block to be executed
}
while (condition);

let i = 0;
do {
  console.log(1);
  i++;				////Result: 0 .. 9
}
while (i < 10); 
//----------------------------------------------------------------------------
"break"		vyskočí z cyklu a už se do něj nevrátí
"continue"	vyskočí z cyklu ale opět se do něj vrátí (přeskočí jeden krok cyklu)

POZN: Dá se použít uvnitř "for", "while", "do-while"
POZN: Dá se použít i obecně uvnitř bloku, ale pak "break + label"

for (let i=0;i<10;i++) {
    if (i==5) {break;}	//
    console.log(i);		//break: 0 .. 4, continue: 0..4,6..9
}
