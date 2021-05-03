var myForm = document.getElementById("myForm");
const pokemonName = document.getElementById("pokemonName");
var elements  = document.getElementById("pokeRow");
var alertBoot = document.getElementById("myAlert");
const prefixUrl = "https://pokeapi.co/api/v2/pokemon/";

myForm.onsubmit = (event) => {
    event.preventDefault();
    let url = prefixUrl + pokemonName.value.toLowerCase();
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
                alertBoot.textContent = "Pokemon not found!";
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
            let colItem =  document.createElement("div");
            colItem.setAttribute("class", "col");
            colItem.style.margin = '20px';
            elements.appendChild(colItem);

            let newitem=document.createElement("div");
            newitem.setAttribute("class", "card");
            newitem.style.width = '200px';
            colItem.appendChild(newitem);
            let cardPic = document.createElement("img");
            cardPic.setAttribute("class", "card-img-top");
            cardPic.src = obj.sprites.front_default;
            newitem.appendChild(cardPic);
            let pokeInfo = document.createElement("div");
            pokeInfo.setAttribute("class", "card-body");
            newitem.appendChild(pokeInfo);

            let pokeName = document.createElement("h4");
            pokeName.setAttribute("class", "card-title");
            pokeName.textContent = obj.name;
            pokeInfo.appendChild(pokeName);

            let pokeExp = document.createElement("p");
            pokeExp.setAttribute("class", "card-text");
            pokeExp.textContent = "Experience : " + obj.base_experience ;
            pokeInfo.appendChild(pokeExp);

            let pokeHeight = document.createElement("p");
            pokeHeight.setAttribute("class", "card-text");
            pokeHeight.textContent = "Height : " + obj.height ;
            pokeInfo.appendChild(pokeHeight);

            let pokeWeight = document.createElement("p");
            pokeWeight.setAttribute("class", "card-text");
            pokeWeight.textContent = "Weight : " + obj.weight ;
            pokeInfo.appendChild(pokeWeight);


        })
      .catch(err =>  {p.innerHTML = err })
      myForm.reset();
      alertBoot.textContent = "";
};