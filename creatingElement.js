const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

const container = document.querySelector('#container-div');
const h1 = container.querySelector('h1');

div.className = 'div-class';
div.setAttribute('id', 'new-div');
div.textContent = 'This div element is created dynamically!';
div.style.fontSize = '20px';
//div.innerHTML = '<p>P tag</p>';

container.insertBefore(div, h1);

// inserting an element as a last child.
// Same element can not be inserted in the DOM tree multiple times. only once.

const travelDiv = container.querySelector('#travel');

div2.innerHTML = `<p>this p tag is also created dynamically</p>`
div2.style.fontFamily = 'Monaco'

//travelDiv.appendChild('Nice job'); // TypeError. appendChild() only receives a Node (or an element)

const returedElement = travelDiv.appendChild(div2); // appendChild() only receives a Node (or an element)
const undefinedElement = travelDiv.append(document.createElement('p'), "Simple text also inserted by append"); // append() can insert anything. 

console.log(returedElement); // appendChild() also returns the element
console.log(undefinedElement); //undefined. append() does not returns the element 

travelDiv.appendChild(document.createElement('img'), document.createElement('h1') ); //only the img tag is created // appendChild() only takes the first Node and insert as a last child in an element. 