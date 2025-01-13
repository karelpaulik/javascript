const person = [
    {id: 1, fName: "Petr", lName: "Novák"},
    {id: 2, fName: "Pavel", lName: "Starý"}
]

//Basic log
console.log("person: ", person);

//Table
console.table(person); //celá tabulka
console.table(person, ["fName", "lName"]);  //výběr sloupců

console.dir(document.body); //Displays an interactive list of the properties of a specified object.

//Logs grouping
console.group("My Group");
console.log("aaa");
console.log("bbb");
console.groupEnd();

//Timer (unique Timer name - multiple Timers allowed)
console.time("Timer1");  //Starts a timer with a unique label.
// some code
console.timeLog("Timer1");  //Logs the elapsed time of a running timer without stopping.
// some code
console.timeEnd("Timer1");  //Stops the timer and logs the elapsed time

//Outputs a message only if the provided assertion is false.
console.assert(2 + 2 === 5, "This will only log if the assertion fails.");

//counter (unique Counter name - multiple Counters allowed)
console.count("Counter1");
console.count("Counter1");
console.count("Counter2");
console.count("Counter1");
console.countReset("Counter1");
console.count("Counter1");
console.count("Counter1");

//trace (info, kudy kód prochází)
function fce() {
    console.trace("Trace 1");
    let a=1;
    console.trace("Trace 2");
}
fce();

//Další možnosti jak logovat (ale nic podstatného)
console.error("Chyba");
console.info("Info");
console.warn("Warning");
console.debug("debug info");

//console clear
console.clear();
