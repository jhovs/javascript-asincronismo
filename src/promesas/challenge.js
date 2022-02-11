// Asincronismo: Resolver problema con promesas 
//# Clase 8 

//--> Require de fetchData 
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

/*  
## RETO ## 
a.	Petición la API 
b.	Obtener cuántos personajes hay en total.
c.	Obtener el primer personaje y saber a qué ubicación se encuentra para saber la dimensión pertenece. 
 */

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API} ${data.results[0].id}`);
    })
    .then(data =>{
        console.log(`${data.name} - ${data.status}`  );
        return fetchData(data.origin.url);
    })
    .then(data =>{
        console.log(data.dimension);
    })
    .catch(err => console.error(err));
