//Block of code that perform specific task

//Normal function
function myFun(x, y){
    s = x + y;
    return s;
}

let sum = myFun(23, 45);
console.log(sum);

//Arrow function
const arrowSum = (a, b) => {
    return a + b;
}
console.log(arrowSum(23,57));

//without parameter
const printHello = () => {
    return 'Hello';
}
console.log(printHello());

//Find vowels in string
const countVowel = (str) => {
    let count = 0;
    for (let i of str)
    {
        if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u')
        {
            count++;
        }
    }
    return count;
}

let vowelCount = countVowel('karan');

console.log(vowelCount);

//forEach loop in arrays (Higher order functions)
//Callback is function passed as argument in another function
//Higher order functions / methods: function which use other function as parameter or return function

let arr = [1,2,3,4,5,6];

//Normal function
// arr.forEach(function myfun(val){
//     console.log(`Values: ${val}`);
// });

//Arrow function
arr.forEach((value) => {
    console.log(`Values: ${value}`);
});
