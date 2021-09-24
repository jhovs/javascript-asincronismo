// Asincronismo: Peticiones a APIs usando callabacks
//# Clase 5

/*/-->  Usaremos XMLHttpRequest para hacer llamados, forma antigua */
// instaciamos instanciandola
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

//creamos una funcion que nos permita traer la información desde nuestra API y le vamos a pasar un callback y desencadenar los llamados que necesitamos
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){ 
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{ 
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
};

//# Clase 6
/*  
## RETO ## 
a.	Petición la API 
b.	Obtener cuántos personajes hay en total.
c.	Obtener el primer personaje y saber a qué ubicación se encuentra para saber la dimensión pertenece. 
 */


//buscamos la lista de personajes 
fetchData(API, (error1, data1 ) => {
    if(error1) return console.error(error1);
    // Buscamos el API de RICK 
    fetchData(API + data1.results[0].id, (error2, data2) =>{
        if(error2) return console.error(error2);
        //Buscamos el origen del personaje
        fetchData(data2.origin.url,(error3, data3) => {
            if(error3) return console.error(error3);

            //mostramos los resultados
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.name);

        });
    });
});