const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios').default;

var currPokemons = [];
var badQ = false;
app.set('views', './views')
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  var fileName = "page.html"
  res.render('template', {currPokemons, badQ});
});

app.route('/addPokemon').post(function(req, res){
  let nameParam = req.body.pokemonName;
  res.end('Looking for pokemon ' + nameParam);
});

app.route('/addPokemon').get(function(req, res){
  const URL = 'https://pokeapi.co/api/v2/pokemon/' + req.query.pokemonName;

  axios.get(URL)
  .then(pokemon_response => {
      let pokemon_data = pokemon_response.data;
      console.log("I am making a request to " + URL);
      currPokemons.push(getPokemonObj(pokemon_data));
      badQ = false;
      res.render('template', {currPokemons, badQ});
    }).catch(function(error){
      console.log(error);
      badQ = true
      res.render('template', {currPokemons, badQ});
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

function getPokemonObj(pokemon_data){
  return {
    name:pokemon_data.name,
    pic:pokemon_data.sprites.front_default,
    exp:pokemon_data.base_experience,
    height:pokemon_data.height,
    weight:pokemon_data.weight
  };
}