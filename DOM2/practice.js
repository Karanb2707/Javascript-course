// Q1

let newBtn = document.createElement('button');

newBtn.innerText = 'click me!';

newBtn.style.backgroundColor = 'red';
newBtn.style.color = 'white';

let body = document.querySelector('body');

body.append(newBtn);

//Q2

let para = document.querySelector('.para');

// para.setAttribute('class', 'newPara'); //overRide

//classList:
console.log(para.classList);
para.classList.add("newPara"); //use to add more class for same element