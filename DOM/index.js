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
// let button = document.getElementById("button");
// console.log(button);

//2. Selecting with class: return HTML collection
// let headings = document.getElementsByClassName("heading");
// console.log(headings);

//3. Selecting with tag:
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

//..........................................Query Selector.................................................................
// 1. Query Selector only first
// let para1 = document.querySelector('p');
// console.log(para1);

// 2. Query Selector for all
// let paraAll = document.querySelectorAll('p');
// console.log(paraAll);

//For class
// let heading = document.querySelector('.heading');
// console.log(heading);

//For id
// let button = document.querySelector('#button');
// console.log(button);

//................................................. Properties ..............................................................

let city = document.querySelector('div');
console.log(city);

let child = document.querySelector('ul').children[0];
let hiddenHeader = document.getElementById('hiddenH3');

//Child Nodes
console.log(child);

//Properties:

//1. tagName
console.log(city.tagName);

//2. innerText:
child.innerText = 'Navi Mumbai'
console.log(child.innerText);

//3. innerHTML
child.innerHTML = '<p>Lucknow</p>'
console.log(child.innerHTML);

//4. textContent 
// Use for show hidden headers and see content inside of it
console.log(hiddenHeader.textContent);


