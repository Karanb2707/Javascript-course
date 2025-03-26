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

// const players = ["Rohit", "Virat", "Sachin"]; //Array

// const myObj = { name:"Karan", age:21 }; //Object

// const myFunction = function() {
//     console.log('Hello World'); //Functions
// }

// //To find the data types

// console.log(typeof(players));

//**************************************************************************************

//Memories

// Stack (Primitive), Heap (Non-Primitive)

//Stack: Primitive
//In stack u get copy of another variable that's why even u change the value of that variable
//still you get previous values

// let name1 = 'Karan';

// let name2 = name1;
// name2 = 'Raam';

// console.log(name1);
// console.log(name2);

//Heap: Non-Primitve
//In heap actually object is stored in memory and then if u assign same variable to another variable 
//Then that new variable just refer to the that object
//That's why if u change the value in object it wil refelct to all variables that is refering that object

let userOne = {
    name: 'Karan',
    email: 'karan@gmail.com'
};

let userTwo = userOne;

userOne.email = 'raam#gooole.com'

console.log(userOne.email);
console.log(userTwo.email);
