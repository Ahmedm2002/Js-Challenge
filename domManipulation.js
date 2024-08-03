//        /********************** Selecting and Manipulating Elements ***********************/

const heading = document.getElementById('heading1');
heading.innerText = 'Changed Using Javascript'

const para = document.querySelector('.para');
para.style.backgroundColor = 'Orange'

//        /********************** Creating and Appending Elements ***********************/

const div = document.createElement('div')
div.innerText = 'This is a div';

const body = document.querySelector('body')
body.append(div)

const list = document.querySelector('.list');

const newLi = document.createElement('li');
newLi.innerText = "Appended Using Js Script";

list.append(newLi)

//        /********************** Removing Elements ***********************/

const toBeRemoved = document.querySelector('.removePara');
body.removeChild(toBeRemoved)

const lastElement = list.lastChild;
list.removeChild(lastElement)

//        /********************** Modifying Attributes and Classes ***********************/

const image = document.querySelector('.image')
image.setAttribute('width','300px' )
image.setAttribute('height','250px' )
image.removeAttribute('src')
image.setAttribute('src','./two.JPG' )

const manipulateCss = document.querySelector('.changeCss');
manipulateCss.style.backgroundColor = 'green';
// console.log(manipulateCss.classList);
manipulateCss.classList.remove('arbitrary')
// console.log(manipulateCss.classList);

//        /********************** Event Handling ***********************/

function clicked() {
  const btn = document.querySelector('button');
  btn.innerText = "Clikced"
}

const para3 = document.querySelector('.changeBorder')
para3.addEventListener('mouseover', (e)=>{
  e.preventDefault();
  para3.style.borderColor = 'yellow'
})

para3.addEventListener('mouseout', (e)=>{
  e.preventDefault();
  para3.style.boderColor = 'none'
})

//        /*******************************************************/
//        /********************** Scripts ************************/
//        /*******************************************************/


//        Text Manipulation Script

function changeText() {
  const heading2 = document.getElementById('heading2');
  heading2.innerText = 'Text Changed';
}

changeText();

//        Element Creation Script

function createElement(elementType, text) {  
  const element = document.createElement(elementType);
  if(text){
    element.innerText = text
  }
  body.append(element)
}

createElement('h2', 'Heading 2 created using js')
createElement('hr')
createElement('div', 'This is a Div created using js')

//        Element Removal Script

function removeElement(element) {
  body.removeChild(element);
}
const element = document.querySelector('#tobeRemoved')
removeElement(element);

//        Attribute Modification Script

function changeAttribute(element, attribute, newValue) {
  element.removeAttribute(attribute)
  element.setAttribute(attribute, newValue);
  element.setAttribute('width', '250px');
  element.setAttribute('height', '200px');
}

const changeImg = document.querySelector('.changePic');

changeAttribute(changeImg, 'src', './two.JPG')

//        Event Handling Script

function manageEvents() {
  const button = document.querySelector('#button');

  button.addEventListener('mouseover', (e) => {
    e.preventDefault();
    button.style.backgroundColor = 'orange';
    button.innerText = 'I am Hovered'
    button.style.color = 'white';
  });

  button.addEventListener('mouseout', (e) => {
    e.preventDefault();
    button.style.backgroundColor = '';
    button.innerText = 'Hover Me'
    button.style.color = '';
  });
}

manageEvents();
