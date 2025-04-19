
//getAttribute: get value 

// let div = document.querySelector('div');

// let id = div.getAttribute('id');
// console.log(id);

//setAttribute: set value to attribute

// let para = document.querySelector('p');
// para.setAttribute('class', 'newPara');

// console.log(para.getAttribute('class'));

// .......................................................................

let newBtn = document.createElement('button');
newBtn.innerText = 'Okay';

console.log(newBtn);

let div = document.querySelector('div');

//append
div.append(newBtn);

//prepend
div.prepend(newBtn);

//before
div.before(newBtn);

//after
div.after(newBtn);

//Heading added in top of body: Practice

let newHeader = document.createElement('h1');
newHeader.innerHTML = '<i>New Heading</i>'

document.querySelector('body').prepend(newHeader);

//remove:
let para = document.querySelector('.para');
para.remove();