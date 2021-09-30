// Async/away
//# Clase 10

//--> Resolver proyecto ahora integrando async/away 

//Require de fetchData 
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

/*  
## RETO ## 
a.	Petición la API 
b.	Obtener cuántos personajes hay en total.
c.	Obtener el primer personaje y saber a qué ubicación se encuentra para saber la dimensión pertenece. 
 */
const anotherFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API} ${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    }catch (error){
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');

