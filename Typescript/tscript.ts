//@ts-ignore only means to bypass intentional errors so it can compile or format

fetch("jokeapi")
  .then((response) => response.json())
  //@ts-ignore
  .then((joke: Joke) => console.log(joke));

//@ts-ignore
function displayJoke(joke: Joke) {
  joke.category = "update";
}

displayJoke(2);

//@ts-ignore
class Duck implements Flyer {
  #name;
}

let numVar: number = 2;
let wordVar: string = "5";

wordVar = numVar.toString();
