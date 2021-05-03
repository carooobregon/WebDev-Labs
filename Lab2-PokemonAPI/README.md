# Lab 2: Querying the Pokémon API

Summary: In this assignment, you are required to employ your knowledge on AJAX, DOM manipulation, CSS, and JS to create a simple web page that queries an open and publicly available end point.

## Description:

Create a web page that asks the user for the name of a pokémon and retrieve its information after clicking a button. The information is retrieved from the API seen during our last class: https://pokeapi.co/api/v2/pokemon/pokemonName (Links to an external site.)

Select at least two available attributes of the pokémon and show them to the user. Showing the name and the image of the pokémon is mandatory.

To help you in this, make use of the Bootstrap card element https://getbootstrap.com/docs/5.0/components/card/ (Links to an external site.) Feel free to define how you would put those attributes in the card (i.e., the inner design).

Use the same attributes always, so your code can be simple.

If a pokémon with the given name does not exist, tell that to the user.

Using a Bootstrap alert is encouraged https://getbootstrap.com/docs/5.0/components/alerts/ (Links to an external site.) 

To show the image, you can use an endpoint available at https://pokeres.bastionbot.org/images/pokemon/1.png (Links to an external site.) Just change the 1 for the number that corresponds to the pokémon. Since to do this you need the id of the pokémon, you first need to look in the pokemon API to identify what is the id value.

It sounds a lot like you can use a promise here to load the image after the pokémon search was successful, nevertheless to give you flexibility you can use other strategies as well.

Although there could be different approaches to show the image, you can simply append an img with the src or srcset attribute with the URL you just created (the bastionbot one). This should automatically load the image.

The card with the pokémon info should be shown in a separated container like a div, table, unordered list, etc. (working like a result list). Feel free to choose the type of your container, but trying to use the classes/elements provided by Bootstrap will help you to gain experience.

Keep adding each retrieved pokémon to your container. Don't worry about duplicated elements

Bonuses:

Implement a delete functionality to individually remove a pokémon from the result list, whether by clicking on it, or adding a delete button to the media card, feel free to define your strategy. Remember that an option to do this is to have a nested hierarchy of elements for each pokémon record, then you can go up in such hierarchy until you can simply call a removeChild or equivalent method.

