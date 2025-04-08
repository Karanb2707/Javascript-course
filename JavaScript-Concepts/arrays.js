let marks = [91, 67, 78, 87, 58];

console.log(marks);
console.log(marks.length); // property

marks[3] = 45;
console.log(marks);

//In javaScript Arrays are mutable
//Strings are immutable

arr = ['A','B','C','D','E','F']

//for loop
for ( let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

//for of
for ( let i of arr)
{
    console.log(i);
}

//Practice Question
let items = [200, 130, 456, 354, 677];

let offer = 0;
let afterOffer = 0;

for (let item of items)
{
    offer = item / 10;
    afterOffer = item - offer;
    console.log(`Price after 10% offer: ${afterOffer}`);
}

//push(): add to end
//pop(): delete from end & return
//toString(): converts array to string
//concat(): joins multiple arrays and return new array
//unshift(): add to start
//shift(): delete from start & return
//slice(): return peice of the array
//splice(): change original array (add, remove, replace), remove is number of item u want to remove

let cart = ['book', 'pen', 'shirt', 'pant'];
let cart2 = ['pencil', 'shorts']
let heroes = ['iron man', 'spider man', 'ant man', 'thor', 'flash', 'hulk'];

cart.push('mobile');

console.log(cart);
cart.pop();
console.log(cart);

console.log(cart.toString());

let newCart = cart.concat(cart2);
console.log(newCart);

heroes.unshift('captain america');
console.log(heroes);

heroes.shift();
console.log(heroes);

console.log(heroes.slice(1, 3)); //last index not include

heroes.splice(2, 1, 'shkitman');
console.log(heroes);
