//Window Object:
//window object represents an open window in browser. its browser object not javascript
//its global object with lots of properties & methods
// alert('hello!');
// console.log('hey');

//DOM (Document Object Model):
//when webpage load browser creates DOM of the page

//1. Used for printing properties and methods
// console.dir(window.document);

//DOM Manipulation:

//1. Selecting with id:
let button = document.getElementById("button");
console.log(button);

//2. Selecting with class: return HTML collection
let headings = document.getElementsByClassName("heading");
console.log(headings);

//3. Selecting with tag:
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
