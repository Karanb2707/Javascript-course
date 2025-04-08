//.................. Modern Array Methods........................

//Map: used to do same operation on every value of array but it return new array with that operation perform

let nums = [12, 34, 56, 78, 89, 57, 15];

nums.map((val) => {
    console.log(`values: ${val}`);
})

//Return square of value

let arr2 = nums.map((value) => {
    return value * value;
})

console.log(`Square: ${arr2}`);

//Filter: method creates new array of filtered array given condition

let even = nums.filter((val) => {
    return val % 2 === 0;
})

console.log(`Even: ${even}`);

//Reduce: perform some operations and return single value

const reduceValue = nums.reduce((res, curr) => {
    return res + curr;
});

console.log(reduceValue);

//Practice for creating array and reduce method

let n = prompt('Enter a number');

let arr = [];

for (let i = 1; i <= n; i++)
{
    arr[i - 1] = i;
}

console.log(arr);

let cal = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(`Calculation: ${cal}`);
