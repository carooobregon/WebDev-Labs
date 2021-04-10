const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios').default;

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
  res.sendFile(fileName, options);
});

app.route('/addPokemon').post(function(req, res){
  // let nameParam = req.body.pokemonName;
  res.end('Looking for pokemon ' + nameParam);
});

app.route('/addPokemon').get(function(req, res){
  const URL = 'https://pokeapi.co/api/v2/pokemon/' + req.query.pokemonName;

  axios.get(URL)
  .then(pokemon_response => {
      let pokemon_data = pokemon_response.data;
      console.log("I am making a request to " + URL);
      res.send(pokemon_data);
  }).catch(function(error){
      console.log(error);
      res.status(404).send('the pokemon does not exist');
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});