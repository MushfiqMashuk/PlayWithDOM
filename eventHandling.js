const city = document.querySelector('#city');

city.addEventListener('mousedown', (event) => {
    console.log(event);
});

//**mouseover event works for the children inside of an element. but mouseenter only works for the element and fires event when mouse enters upon the element. */ 