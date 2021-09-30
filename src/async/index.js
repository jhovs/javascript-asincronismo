// Async/Await
//# Clase 9 

//--> Usamos el async para definir una función donde se encontrará el await que nos permitirá esperar una promesa de tal forma que podamos volver nuestro código sincrono.

// Nueva promesa usando async/away
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'), 2000)
        : reject(new Error('Test Error'))
    });
};

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Antes 1');
doSomething();
console.log('Despues 1');

// Como vamos a captar errores y presentar ..
const anotherFunction = async () =>{
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch (error){
        console.error(error);
    }
}

console.log('Antes 2');
anotherFunction();
console.log('Despues 2');