const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const buttonElement = document.querySelector("button");

const quotes = [
  {
    quote: "De grootste overwinning is de overwinning op jezelf.",
    author: "Plato"
  },
  {
    quote: "Het leven is een reis, geen bestemming.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Je kunt niet altijd krijgen wat je wilt, maar als je het probeert soms zul je ontdekken dat je krijgt wat je nodig hebt.",
    author: "The Rolling Stones"
  },
  {
    quote: "Niet alle schatten zijn zilver en goud.",
    author: "Captain Jack Sparrow"
  },
  {
    quote: "Als je doet wat je altijd hebt gedaan, zul je krijgen wat je altijd hebt gekregen.",
    author: "Tony Robbins"
  }
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  quoteElement.innerHTML = quote;
  authorElement.innerHTML = "- " + author;
}

getQuote();
