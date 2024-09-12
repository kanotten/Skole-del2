fetch("jokeapi")
  .then((response) => response.json())
  .then((joke: Joke) => console.log(joke));

function displayJoke(joke: Joke) {
  joke.category = "update";
}

displayJoke(2);
