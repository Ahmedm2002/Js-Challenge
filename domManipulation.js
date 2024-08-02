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
console.log(manipulateCss.classList);
manipulateCss.classList.remove('arbitrary')
console.log(manipulateCss.classList);

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
