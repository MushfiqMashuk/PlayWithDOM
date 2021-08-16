console.table(document.location);

const grandParent = document.querySelector ('#travel'); // div
const parent = grandParent.children[1]; // ul
const children = parent.children; // returns collection of all children of an element 
console.log(children);

// we can get parent element from children

const parentElement = children[0].parentElement;
console.log(parentElement); //we get ul element

//**Untill now we're traversing from top to bottom. Now bottom to top. That means getting parent or grandparent from an element. In this example I am going to get the <div> from <li> */

const li = children[0];

const div = li.closest('#travel');

//**closest() is the equivalent of querySelector() but from bottom to top */

console.log(div); // returns the div with id=travel

/** Finding Sibling */

const childTwo = li.nextElementSibling; // next sibling
childTwo.style.listStyle = 'none'
childTwo.style.color = 'red'; // Peshawar is red

// previous sibling

const childOne = childTwo.previousElementSibling;
childOne.style.color = 'purple';
childOne.style.fontSize = '30px';

