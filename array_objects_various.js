//object - How to add new property
//..................................
const person = {id: 1, fName: "Karel"};

//new property type: String
person.lName = "Novak";

//new property type: array
person.animals = [];
person.animals.push("dog");
person.animals.push("cat");

//new property type: object
person.job = {company: "JULI", city: "Moravany"};

console.log(JSON.stringify(person));
//{"id":1,"fName":"Karel","lName":"Novak","animals":["dog","cat"],"job":{"company":"JULI","city":"Moravany"}}
//------------------------------------------------------------
//copy array
..........
const a1 = [1,2,3, {prop1: 100}];
const a2 = a1;
const a3 = [...a1];
const a4 = JSON.parse(JSON.stringify(a1));

a1[0]=10;
a1[3].prop1=101;
a1.push({prop3: 200});

console.log("a1: ", JSON.stringify(a1));  //a1:  [10,2,3,{"prop1":101},{"prop3":200}]
console.log("a2: ", JSON.stringify(a2));  //a2:  [10,2,3,{"prop1":101},{"prop3":200}]
console.log("a3: ", JSON.stringify(a3));  //a3:  [1,2,3,{"prop1":101}]
console.log("a4: ", JSON.stringify(a4));  //a4:  [1,2,3,{"prop1":100}]

//-----------------------------------------------------------------------
//copy array of objects
//array of objects
const t1 = [
    {id: 1, fName: "Karel", job: {comp: "JULI", pos: "IT"}},
    {id: 2, fName: "Petr"},
]

//new array of object: shallow copy
const t2 = t1.map(x => {
    return {...x}
});

//new array of object: deep copy
const t3 = JSON.parse(JSON.stringify(t1));

//t1 change
//t2 is shallow copy, change of t1 can change t2 as well
t1[0].fName = "Kaja";    //change only in "t1" 
t1[0].job.comp = "JULI Motorenwerk"   //change in "t1" and "t2"

//t3 change
//t3 is deep copy, change of t1 does not affect t3
t3[0].animals=[];
t3[0].animals[0]={type: "cat", age: 5};
t3[0].animals.push({type: "dog", age: 7});

const animal1 = {type: "horse", age: 10};
t3[0].animals.push(animal1);

console.log(JSON.stringify(t1));
console.log(JSON.stringify(t2));
console.log(JSON.stringify(t3));
//[{"id":1,"fName":"Kaja","job":{"comp":"JULI Motorenwerk","pos":"IT"}},{"id":2,"fName":"Petr"}]
//[{"id":1,"fName":"Karel","job":{"comp":"JULI Motorenwerk","pos":"IT"}},{"id":2,"fName":"Petr"}]
//[{"id":1,"fName":"Karel","job":{"comp":"JULI","pos":"IT"},"animals":[{"type":"cat","age":5},{"type":"dog","age":7},{"type":"horse","age":10}]},{"id":2,"fName":"Petr"}]
