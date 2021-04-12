const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const axios = require('axios').default

app.use(cors());

app.get('/getPokemon', (req,res) => {
  let pokemonName = req.query.name
  console.log(req.query)
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

  axios.get(url).then((response) => {
    let poke_data = response.data
    console.log(returnPokeObject(poke_data))
    res.status(200).send(returnPokeObject(poke_data));
  }).catch ((error) => {
    res.status(404).send()
  })
})

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
