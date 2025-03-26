//Primitive

// 7 Types: String, Number, Boolean, BigInt, Null, Undefined, Symbol

const score = 100;
const poniter = 10.2;

const isLogin = true;
const temp = null;

let name; //Undefined

const id = Symbol('123');
const id2 = Symbol('123');

// console.log(id === id2); // false 
//in symbol everything is consider as unique

//Non-Primitive (Reference)

//Array, Objects, Functions

const players = ["Rohit", "Virat", "Sachin"]; //Array

const myObj = { name:"Karan", age:21 }; //Object

const myFunction = function() {
    console.log('Hello World'); //Functions
}

//To find the data types

console.log(typeof(players));