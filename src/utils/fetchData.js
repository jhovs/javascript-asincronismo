// Conección con fetch desde ES06
//# Clase 8

// instaciamos instanciandola
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//--> Creamos una funcion que nos permita traer la información desde nuestra API con ES06 - fech
const fetchData = (url_api) =>{
    return new Promise((resolve, reject) =>{
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() =>{
            if (xhttp.readyState === 4){ 

                xhttp.status === 200
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))

            }
        });
        xhttp.send();
    });
};

module.exports = fetchData;