// Asincronismo: Peticiones a APIs usando callabacks
//# Clase 5

/*/-->  Usaremos XMLHttpRequest para hacer llamados, forma antigua */
// instaciamos instanciandola
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//creamos una funcion que nos permita traer la información desde nuestra API y le vamos a pasar un callback y desencadenar los llamados que necesitamos
function fetchData(url, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){ 
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText)) 
            }else{ 
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
};