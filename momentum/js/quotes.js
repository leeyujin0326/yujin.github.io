const quotes = [
    { //1
        quote: "When all life is seen as divine, everyonegrows wings",
        author: "Michael Jackson",
    },
    { //2
        quote: "Make love your weapon to overcome any evil.",
        author: "Michael Jackson",
    },
    { //3
        quote: "I believe in wishes and a person's ability to make them come true. its something your conscious and subconscious can make a reality",
        author: "Michael Jackson",
    },
    { //4
        quote: "What is genius? Someone who inspires change",
        author: "Michael Jackson",
    },
    { //5
        quote: "Don’t be afraid to know who you are. youare much more than you ever imagined",
        author: "Michael Jackson",
    },
    { //6
        quote: "Believe in yourself, study the greats. Andbecome greater",
        author: "Michael Jackson",
    },
    { //7
        quote: "The meaning of life is contained in everysingle expression of life. It’s present in the infinity of all forms andphenomenon that exist in all creation",
        author: "Michael Jackson",
    },
    { //8
        quote: "The deeper i go into myself, the stronger ibecome, because i realize that my real self is much bigger than any fear",
        author: "Michael Jackson",
    },
    { //9
        quote: "no matter what, no star is too far to reachand you, never give up",
        author: "Michael Jackson",
    },
    { //10
        quote: "I have always believed that the real measureof celebrity-success was not just how famous he becomes but what he does withthat fame and fortune.",
        author: "Michael Jackson",

    }

];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;