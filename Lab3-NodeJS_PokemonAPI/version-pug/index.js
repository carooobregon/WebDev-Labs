const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;

app.route('/').get(function(req, res){
  res.end('List of clients');
});

app.route('/pokemon').post(function(req, res){
  let nameParam = req.body.pokemonName;
  res.end('Registering a pokemon ' + nameParam);
});

// myForm.onsubmit = (event) => {
//     event.preventDefault();
//     let url = prefixUrl + pokemonName.value.toLowerCase();
    
//     axios.get(URL)
//     .then(pokemon_response => {
//       var obj = JSON.parse(okMessage);
//       let colItem =  document.createElement("div");
//       colItem.setAttribute("class", "col");
//       colItem.style.margin = '20px';
//       elements.appendChild(colItem);

//       let newitem=document.createElement("div");
//       newitem.setAttribute("class", "card");
//       newitem.style.width = '200px';
//       colItem.appendChild(newitem);
//       let cardPic = document.createElement("img");
//       cardPic.setAttribute("class", "card-img-top");
//       cardPic.src = obj.sprites.front_default;
//       newitem.appendChild(cardPic);
//       let pokeInfo = document.createElement("div");
//       pokeInfo.setAttribute("class", "card-body");
//       newitem.appendChild(pokeInfo);

//       let pokeName = document.createElement("h4");
//       pokeName.setAttribute("class", "card-title");
//       pokeName.textContent = obj.name;
//       pokeInfo.appendChild(pokeName);

//       let pokeExp = document.createElement("p");
//       pokeExp.setAttribute("class", "card-text");
//       pokeExp.textContent = "Experience : " + obj.base_experience ;
//       pokeInfo.appendChild(pokeExp);

//       let pokeHeight = document.createElement("p");
//       pokeHeight.setAttribute("class", "card-text");
//       pokeHeight.textContent = "Height : " + obj.height ;
//       pokeInfo.appendChild(pokeHeight);

//       let pokeWeight = document.createElement("p");
//       pokeWeight.setAttribute("class", "card-text");
//       pokeWeight.textContent = "Weight : " + obj.weight ;
//       pokeInfo.appendChild(pokeWeight);
//     }).catch(function(error){
//         console.log(error);
//         res.status(404).send('the pokemon does not exist');
//     });
// };

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});