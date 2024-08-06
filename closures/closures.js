//                    Understanding Closures

function outerFunc(){
  let variable = 'I am outer Variable';

  return function(){
    return console.log(`Hello From inner function ${variable}`)
  }
}
let innerFunc = outerFunc();
innerFunc();

function counter() {
  let counter = 0;
  return function (){
    counter ++;
    console.log(`Counter: ${counter}`);
    return counter;
  }
}

let count = counter();
count();

//                    Practical Closures

function getRandId() {
  let lastId = [];
  return function () {
    let Id = Math.floor(Math.random()*4999);
    lastId.push(Id)
    console.log(`Last Generated Id: ${lastId}`);
    return lastId;
  }
}

const generateId = getRandId()
console.log(generateId());

function greetings(name) {
  return function () {
    console.log(`Welcome Mr.${name}`);
  }
}

const greet = greetings('Alice Johnson');
greet();

//                    Closures in Loops

function createFunctionArray(n) {
  let funcs = [];
  
  for (let i = 0; i < n; i++) {
    funcs.push((function(index) {
      return function() {
        console.log(`Function at index: ${index}`);
      }
    })(i));
  }
  
  return funcs;
}

const funcArray = createFunctionArray(5);

funcArray[0]();
funcArray[1]();
funcArray[2]();
funcArray[3]();
funcArray[4]();


//                    Module Patterns

const itemManager = (function() {
  let items = [];

  return {
    addItem: function(item) {
      items.push(item);
      console.log(`${item} added.`);
    },
    removeItem: function(item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },
    listItems: function() {
      console.log('Items:', items);
    }
  };
})();

itemManager.addItem('apple');
itemManager.addItem('banana');
itemManager.listItems();
itemManager.removeItem('apple');
itemManager.listItems();
