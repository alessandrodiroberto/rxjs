"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/*
range(1, 200)
  .pipe(
    //filter((x) => x % 2 === 1)//, //agisce sullo stream di dati e ne restituisce solop i dispari
    //map((x) => x * x) //per ogni elemento filtrato in precedenza, ritorna il quadrato
    filter((k)=>)
    )
  .subscribe((x) => console.log(x)); //Ritorna i valori
*/
(0, rxjs_1.range)(1, 200)
    .pipe((0, operators_1.filter)((x) => x % 2 === 1), //IF
(0, operators_1.map)((x) => sum(x)) //Assegnazione
)
    .subscribe((x) => console.log(x)); //Ritorna i valori
function sum(x) {
    return x / 12;
}
