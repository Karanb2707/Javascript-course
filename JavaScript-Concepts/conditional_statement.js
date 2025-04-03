//Conditional Statement in javascript

//1. if - else

let age = 20;
let height = 120;

if(age >= 18)
{
    console.log('Applicable For Voting');
}
else {
    console.log('Not Applicable For Voting');
}

//2. if- else-if -else

if( age >= 18)
{
    console.log('Applicable For Voting');
}
else if ( age >= 60)
{
    console.log('Applicable For Voting & senior citizen');
}
else{
    console.log('Not Applicable For Voting');
}

//3. AND - OR operator

if ( age >= 18 && height >= 110) //AND
{
    console.log('You are complete fit');
}
else if ( age>= 18 || height >= 110) //OR
{
    console.log('Yo are fit');
}
else{
    console.log('Not fit');
}

//4. Switch

const season = 'rainy';

switch (season)
{
    case "sunny":
        console.log('Sunny weather');
        break;
    case "rainy":
        console.log('Rainy weather');
        break;
    default:
        console.log('Normal');
}

//5. Ternary Operator

let weight = 89;

let op = weight >= 100 ? 'Not fit' : 'Fit';
console.log(op);
