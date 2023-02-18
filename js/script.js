const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const buttonElement = document.querySelector("button");

const quotes = [
  {
    quote: "The greatest victory is the victory over yourself.",
    author: "Plato"
  },
  {
    quote: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You can't always get what you want, but if you try sometimes you'll find that you get what you need.",
    author: "The Rolling Stones"
  },
  {
    quote: "Not all treasures are silver and gold.",
    author: "Captain Jack Sparrow"
  },
  {
    quote: "If you do what you've always done, you'll get what you've always got.",
    author: "Tony Robbins"
  },
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  quoteElement.innerHTML = `<b style='font-size:25px;'>"</b>` + quote + `<b style='font-size:25px;'>"</b>` ;
  authorElement.innerHTML = "- " + author;
}

getQuote();
