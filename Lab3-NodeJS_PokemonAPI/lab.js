const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

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
  console.log(req.query.pokemonName);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});