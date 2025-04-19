let divs = document.querySelectorAll("div");
console.log(divs);

// simple way
divs[0].innerText = 'new Box 1'
divs[1].innerText = 'new Box 2'
divs[2].innerText = 'new Box 3'

// another way
let idx = 1;
for(div of divs)
{
    console.log(div.innerText = `new value ${idx}`);
    idx++;
}