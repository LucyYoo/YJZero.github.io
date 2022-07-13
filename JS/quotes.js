const quotes = [
    {
        quote: "Don’t dwell on the past.",
    },
    {
        quote: "believe in yourself.",
    },
    {
        quote: "your only live once.",
    },
    {
        quote: "When they go low, we go high.",
        author: "Michelle Obama",
    },
    {
        quote: "I was never less alone than when by myself.",
        author: "Edward Gibbon",
    },
    {
        quote: "A friend is a second myself.",
        author: "Aristotle",
    },
    {
        quote: "Only I can change my life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "This too shall pass away.",
        author: "Abraham Lincole",
    },
    {
        quote: "Life is unfair, get used to it.",
        author: "Bill gates ",
    },
    {
        quote: "Life is all about timig.",
    }

];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

if(todaysQuote.author === undefined){
    author.innerText="";
}