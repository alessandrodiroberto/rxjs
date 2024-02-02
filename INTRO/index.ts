import { range } from "rxjs";
import { map, filter } from "rxjs/operators";

/*
range(1, 200)
  .pipe(
    //filter((x) => x % 2 === 1)//, //agisce sullo stream di dati e ne restituisce solop i dispari
    //map((x) => x * x) //per ogni elemento filtrato in precedenza, ritorna il quadrato
    filter((k)=>)
    )
  .subscribe((x) => console.log(x)); //Ritorna i valori
*/

range(1, 200)
  .pipe(
    filter((x)=> x % 2 === 1), //IF
    map((x)=> sum(x)) //Assegnazione
    )
  .subscribe((x) => console.log(x)); //Ritorna i valori

  function sum(x : number){
    return x / 12;
  }