# Lab 4: Querying the Pokémon API with basic server cache

## Description

This assignment can be build on top of our previous assignment.

Create the same pokemon deck app (retrieve pokemon data using ExpressJS as an intermediate point) but now enabled with basic server caching.
Basically, use a JS Map to store the attributes of the pokemons being retrieved from the Pokémon API. See slides/snippets to have an idea of this.
To standardize, the starting HTML file must delivered by ExpressJS using the route /queryForm.
Next, the clients ask for a pokemon data.
When servicing requests, the NodeJs/Express server must look for the pokemon’s API locally.
If it is not available, then the pokemon API is queried and the pokemon data is stored in the local cache.
If it is available, then the pokemon’s info is replied from there.
In the client side, we still calculate the total weight, validate input, show messages, etc. You must use bootstrap or another library if your choice to make your design.
Deliverables: both the server and client-side code.