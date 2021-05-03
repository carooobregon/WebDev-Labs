# Lab 3: Querying the Pokémon API from server side

## Description
In this lab, you are requested to develop a Node.JS app that can query the PokémonAPI to answer to requests for information sent by the client.

Particularly, you will create a deck of pokémons, and you need to show the total weight of all of the pokémons currently in the deck.

The client, as usual, through an HTML page with its own JS functionality will ask your Node app for a pokémon information.

As we did before, you can let the user type the name in a textbox.

This should happen in an AJAX request.

You can use axios here in the client side if you want, or stick with the XMLHttpRequest object style.

Your Node app, created using Express, will receive such requests from the client, and will start an AJAX request to the Pokémon API using axios (here, using axios is mandatory).

When the server gets the response back from the Pokémon API, it will respond to the client with some attributes that must be shown later in the HTML page.

What attributes? Mandatory are the name, image, and evidently the weight. Other than that please feel free to add more.

You MUST NOT reply with the whole JSON back to the client, just a custom JSON object with the attributes you need.

The client will receive the response for its initial Ajax request and will show them in a bootstrap card in a deck/container (this is similar as in assignment 2).

Every time a pokémon is added, you must show the total weight of the pokémons in the deck.

You must implement the remove functionality in your deck, and every time you remove one, the total weight should be updated.

Handle properly major aspects: validate empty names, properly give feedback when a pokémon does not exist.

Use status codes (404 if you want) for when a pokémon does not exist.

Use bootstrap and feel free to incorporate other functionalities. From this assignment, you are free to use any library/module you might consider convenient, just briefly mention in the submission what they are and what they do in the server or client side.


Deliverables: Both the client and server side code of your implementation (or a link to a github/gitlab/etc repo).


