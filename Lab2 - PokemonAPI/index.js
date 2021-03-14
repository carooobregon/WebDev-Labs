var myForm = document.getElementById("myForm");
const pokemonName = document.getElementById("pokemonName");
var elements  = document.getElementById("elements");
const prefixUrl = "https://pokeapi.co/api/v2/pokemon/";

myForm.onsubmit = (event) => {
    event.preventDefault();
    let url = prefixUrl + pokemonName.value;
    console.log(url);
    let ajaxPromise = new Promise((resolve, reject) => {
        // Initialize the HTTP request.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        
        // Track the state changes of the request.
        xhr.onreadystatechange = function () {
          var DONE = 4; 
          var OK = 200; 
          if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
              resolve(xhr.responseText);
            } else {
              reject(xhr.status);
            }
          }
        };
        // Send the request to send-ajax-data.php
        xhr.send(null);
      });
      
      let p = document.querySelector("p");
      ajaxPromise.then((okMessage) => {
        var obj = JSON.parse(okMessage);
        console.log(obj);
        p.innerHTML = okMessage
        })
      .catch(err =>  {p.innerHTML = err })
};

