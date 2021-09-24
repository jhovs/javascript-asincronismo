// Asincronismo: Callback 
//# Clase 4

/*/--> callback: es simplemente una función que se pasa como parámetro a otra función. */
const sum = (num1, num2) => num1 + num2;
const calc = (num1, num2, callback) => callback(num1, num2);
console.log(calc(6,2, sum));

// ejecutar callback con tiempos 
function date(callback){
    console.log(new Date + " Primero");
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
};

const printDate = (dateNow) => console.log(dateNow + " Segundo");
date(printDate);

// ejecutar callback con tiempo usando funcion anonima 
console.log('A')
setTimeout(() => console.log('B'), 4000)
console.log('C')
