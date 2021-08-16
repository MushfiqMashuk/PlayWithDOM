console.dir(document);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.dir(document.head);
console.dir(document.all);

const header = document.getElementById("my-header");
console.dir(header.textContent); //output: This is header //this returns the whole text inside an element
console.dir(header.innerText); //output: This is // This returns what is shown in the browser
console.dir(header.innerHTML); //output: whole content inside an element in the form of String

header.style.fontFamily = 'Monaco';
console.dir(Document);
console.dir(HTMLDocument);
console.dir(Node);

const pTags = document.getElementsByClassName('p-class');
console.dir(pTags[0]); // HTMLCollection- it is an array-like object but not an array. Array methods will not work on it 
pTags[0].draggable = true;

// these methos also work under any element
const city = document.getElementById('city');

const country = city.getElementsByTagName('li');

for(let element of country){
    element.style.listStyle = 'none';
}

// Query selector
console.log(document.querySelector('li:first-child')); 
console.log(document.querySelector('li:nth-child(2)'));
console.log(document.querySelector('ul#country > li:first-child'));
console.log(document.querySelectorAll('.country')); // returns a NodeList (Array-like)