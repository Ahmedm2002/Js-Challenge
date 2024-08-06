//        /********************** Basic Event Handling ***********************/

const para = document.querySelector('.para');

function changeText() {
  para.innerText = 'Text is Changed using Javascript';
}

const toggleImg = document.querySelector('.toggleImg');
const img = document.querySelector('.img')
toggleImg.addEventListener('click', (e) => {
  e.preventDefault();
  if(img.style.display === 'none'){
    img.style.display = 'block'
  }
  else{
    img.style.display = 'none'
  }
});


//        /********************** Mouse Events ***********************/

const para2 = document.querySelector('.setBg');
// const para3 = document.querySelector('.removeBg');

para2.addEventListener('mouseover', (e)=>{
  e.preventDefault();
  para2.style.color = 'black';
  para2.style.backgroundColor = 'teal';
})

para2.addEventListener('mouseout', (e)=>{
  e.preventDefault();
  para2.style.color = 'white';
  para2.style.backgroundColor = 'black';
})

//        /********************** Keyboard Events ***********************/

let str = '';
const inputTxt = document.querySelector('.inputText');
inputTxt.addEventListener('keydown' , (e)=>{
  str += e.key
  console.log(e.key);
})

const keyUp = document.querySelector('.keyUp')
// console.log(keyUp);
inputTxt.addEventListener('keyup', (e) => {
  console.log(str);
  para2.innerText = str;
})

//        /********************** From Events ***********************/

const form = document.querySelector('.basicForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      age: document.getElementById('age').value,
      email: document.getElementById('email').value
  };

  console.log('Form Data:', formData);
});

const dropdown = document.querySelector('#dropdown');

const selectValPara = document.querySelector('#selectedValue');
dropdown.addEventListener('change', function() {
  selectValPara.innerText = `Selected value: ${dropdown.value}`;
});

//        /********************** Event Delegation ***********************/

const list = document.getElementById('list')

list.addEventListener('click' , (e)=>{
  if (e.target && e.target.nodeName === 'LI') {
    console.log(`Clicked list item text: ${e.target.innerText}`);
}
})

const parent = document.getElementById('parent');
        const dynamicList = document.getElementById('dynamicList');
        const addButton = document.getElementById('addButton');
 // Event delegation to handle clicks on dynamically added list items
parent.addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    console.log(`Clicked dynamically added list item text: ${event.target.innerText}`);
  }
  });
  // Add a new list item when the button is clicked
addButton.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.innerText = `Item ${dynamicList.childElementCount + 1}`;
  dynamicList.appendChild(newItem);
  });



//        /*******************************************************/
//        /********************** Scripts ************************/
//        /*******************************************************/

//        Click Event
function clickEvent() {
  const btnPara = document.getElementById('btn-para');
  const toChangePara = document.getElementById('para_1');

  btnPara.addEventListener('click', (e)=>{
    e.preventDefault();
    toChangePara.innerText = 'Text is Changed via Javascript';
  })
}
clickEvent();

//       Mouse Event

function mouseEvent() {
  const heading = document.querySelector('.hover-heading');
  heading.addEventListener('mouseover', (e)=>{
    heading.style.backgroundColor = 'teal';
    heading.style.color = 'white';
  })

  heading.addEventListener('mouseout', (e)=>{
    heading.style.backgroundColor = 'white';
    heading.style.color = 'black';
  })
}
mouseEvent();

//      Keyboard Event

function KeyboardEvent() {
  let inputValue = '';
  const inputVal = document.querySelector('#inputVal')
  inputVal.addEventListener('keydown', (e)=>{
    console.log(e.key);
  })

  inputVal.addEventListener('keyup', (e)=>{
    inputValue += e.key;
    console.log(inputValue);
  })
}
KeyboardEvent();

//      Form Event
//      See line 55 to 77

//      Event Delegation
//      See line 80 to 102