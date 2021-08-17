const city = document.querySelector('#city');

city.addEventListener('mousedown', (event) => {
    console.log(event);
});

//**mouseover event works for the children inside of an element. but mouseenter only works for the element and fires event when mouse enters upon the element. */ 

/*
keypress, keyup, kyedown, focus, blur, cut, paste, input,

form event: submit
*/

const input = document.querySelector('input[id="input"]');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    //console.log(event.key);
    event.preventDefault();
    console.log(event.target);
    
});