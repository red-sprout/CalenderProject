const quotes = [
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The best way to find out what you want in life is to try a lot of things.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "The best way to find out if you can trust somebody is to trust them.",
    author: "Ernest Hemingway",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote:
      "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Michael Jordan",
  },
  {
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "\n\n-" + todaysQuote.author + "-";
