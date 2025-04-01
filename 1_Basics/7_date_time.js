//Dates

// let date1 = new Date();

// console.log(date1);
// console.log(date1.toString());
// console.log(date1.toDateString());
// console.log(date1.toLocaleString());

// console.log(typeof(date1)); //Object

//Creating Date
//In Js Month start from 0, 0 => Jan

// let date2 = new Date(2025,1,20) //year,month,date;
// console.log(date2.toDateString());

// let date3 = new Date(2025,6,27, 12,1) //year,month,date,hour;
// console.log(date3.toLocaleString());

// let date4 = new Date("03-31-2025"); //Month-Day-Year
// console.log(date4);

// let myTimeStamp = Date.now();

// console.log(myTimeStamp); //In this we get value in miliseconds from 1st jan 1970
// console.log(date4.getTime()); //Same in this too

//Mostly use to compare dates

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate.getDate());
// console.log(newDate.getMonth()); //In js month start from 0, 3 => April
// console.log(newDate.getMinutes());

let formatDate = newDate.toLocaleDateString('en-IN', {
    dateStyle: 'long',
    weekday: 'short'
});

console.log(formatDate);
