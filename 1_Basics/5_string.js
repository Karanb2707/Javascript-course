// const name = "Karan"
// const age = 21

// console.log(name + ' age is ' + age); //Bad Practice

//String Interpolation
//String is object not array
// console.log(`Hello, My Name is ${name} and age is ${age}`);x

// const cityName = new String('Mumbai');

// console.log(`${cityName} is city!`)

// console.log(cityName[0]);
// console.log(cityName.__proto__);

// console.log(cityName.length)
// console.log(cityName.toUpperCase());

// console.log(cityName.charAt(2)); // To find char at which position using index
// console.log(cityName.indexOf('b')) // To find index of char using that string

// const cityName2 = cityName.substring(0, 4); // in substring we can not give negative values
// console.log(cityName2);

// const cityName3 = cityName.slice(-2, 3); // in slice we can give negative values
// console.log(cityName3);

//Trim
// const myname = "    Karan   "
// console.log(myname);
// console.log(myname.trim());

//Replace
// const url = "https://karan.com/karan%20bolake";

// console.log(url);
// console.log(url.replace('%20','-'));

//Split
const string1 = 'karan bolake'
console.log(string1.split(' '));