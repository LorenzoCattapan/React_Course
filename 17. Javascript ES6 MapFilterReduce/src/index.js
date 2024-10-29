import React from "react";
import ReactDOM from "react-dom/client";
import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const doubleNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubleNumbers);

//Filter - Create a new array by keeping the items that return true.

const filterNumbers = numbers.filter((number) => {
    return number < 10;
});

console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

const reduceNumbers = numbers.reduce((accumulator, number) => {
    return accumulator += number;
});

console.log(reduceNumbers);

//Find - find the first item that matches from an array.

const foundNumber = numbers.find((number) => {
    return number === 48;
});

console.log(foundNumber);

//FindIndex - find the index of the first item that matches.

const foundIndexNumber = numbers.findIndex((number) => {
    return number === 48;
});

console.log(foundIndexNumber);

//CHALLENGE - get back array emojipedia with only meaning truncated at 100 chars

const emojipediaTruncated = emojipedia.map((emoji) => {
    return emoji.meaning.substring(0,100);
});

console.log(emojipediaTruncated);

/*******React***********/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <h1>Hello World</h1>
); 