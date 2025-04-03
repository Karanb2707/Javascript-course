// for loop

for (let i = 1; i <= 10; i++)
{
    console.log('Hello i am Karan');
}

sum = 0;
for (let i = 1; i<= 5; i++)
{
    sum = sum + i;
}
console.log(sum);

// while loop

let i = 1;

while (i <= 10)
{
    console.log(`i: ${i}`);
    i++;
}

// do-while loop
// At least run one time

let j = 10;

do {
    console.log(`Heyy inside do while`);
    j++
} while (j <= 5);

// for-of loop
// Use loop on String and Arrays

let str = "KaranBolake";
let size = 0;

for (let i of str)
{
    console.log(`String value: ${i}`);
    size++;
}
console.log(`Size: ${size}`);

// for-in loop
// use in objects and arrays

let obj1 = {
    name: 'Karan',
    age: '21',
    city: 'Thane'
}

for (let i in obj1)
{
    console.log(`Object values: Key: ${i}, Values: ${obj1[i]}`);
}

// odd even questions

for (let i = 1; i <= 20; i++)
{
    if(i%2 === 0)
    {
        console.log(`${i} this number is even`);
    }
    else
    {
        console.log(`${i} this number is odd`);
    }
}
