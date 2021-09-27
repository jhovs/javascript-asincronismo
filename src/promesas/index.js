// Asincronismo: Promesas 
//# Clase 7 

/*/--> promesa: Objeto que representa un valor que estará disponeble ahora, en el futuro o quiza nunca. */

//Aqui la promesa se ejecuta al cargar el archivo 
let x = 10;

const sometimesWillHappen1 = () =>{
    return new Promise((resolve, reject) => {
        if(x === 10){
            resolve('Hey!!');
        }else{
            reject('Whoops');
        }
    });
};

sometimesWillHappen1()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//Aqui la promesa no se ejecuta hasta que se llame a la funcion 
const sometimesWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        }else{
            const error = new Error('Wooop!');
            reject(error);
        }
    });
}; 

sometimesWillHappen2()
    .then(response => {
        console.log(response)
        })
    .catch(err => console.error(err));


/*/Promise.all(): Correremos varias promesas al mismo tiempo encadenadas, permitir 
ejecutar las promesas retornando un arreglo con los resultados */

Promise.all([sometimesWillHappen1(), sometimesWillHappen2()])
    .then(response =>{ 
        console.log('Array of results', response);
    })
    .catch(err => console.error(err));
    