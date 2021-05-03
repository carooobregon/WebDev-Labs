const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const axios = require('axios').default
var PokeModel;

app.use(cors());

let pokeCache = new Map()

// 1. Referencing Mongoose
const mongoose = require('mongoose');
// remove a warning
mongoose.set('useCreateIndex', true); 

// 2. Defining the schema
console.log("Defining the schema")
const pokemonSchema = new mongoose.Schema({
    name: {type: String, unique:true, required: true},
    weight: Number,
    height: Number,
    pic: String,
    exp: Number
});

// 3. Connecting with the database
const mongoDB = 'mongodb://localhost/movies';
// var mongoDB = 'mongodb+srv://root:root@mycluster.tosad.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to database server');
    initializeModel();
});

// 4. Create a model from a schema
function initializeModel(){
  console.log("Initializing the model")
  PokeModel = mongoose.model('Pokemon', pokemonSchema);
}


app.get('/queryForm', (req,res) => {
  let pokemonName = req.query.name
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  if (pokeCache.has(pokemonName)) {
    res.status(200).send(pokeCache.get(pokemonName));
  }
  else {
    axios.get(url).then((response) => {
      console.log("ww", response.data)
      let poke_data = response.data;
      pokeObj = returnPokeObject(poke_data)
      console.log("pokeob", pokeObj)
      let curr_pokemon = new PokeModel({name: pokeObj.name, weight: pokeObj.weight, height: pokeObj.height, pic: pokeObj.pic, exp: pokeObj.exp});
      pokeCache.set(poke_data.name, returnPokeObject(poke_data));

      curr_pokemon.save((err) => {
        if (err) res.status(503).end(`error: ${err}`); 
        else {
            // res.send({movieId: movie.movieId, title: movie.title, rating: movie.rating});
            res.send(curr_pokemon);
        }
      });
      
      res.status(200).send(returnPokeObject(poke_data));
    }).catch ((error) => {
      console.log("owo")
      res.status(404).send()
    })
  }
})

app.route('/pokemons').get(async function(req, res){    
  let allPokemons = await PokeModel.find();
  res.send(allPokemons);
});

function returnPokeObject(poke_data){
    return {
        name: poke_data.name,
        weight: poke_data.weight,
        height: poke_data.height,
        pic: poke_data.sprites.front_default,
        exp: poke_data.base_experience
    };
}

app.listen(port, () => {
  console.log('server running')
})
