//              Basic Error Handling with try/catch

function tryCatch() {
  try {
    throw new Error ('Error Thrown Intentionally');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
// tryCatch();

function divideNums(numenator , denomenator) {
  try {
    if(denomenator === 0){
      throw new Error ('Denomenator cannot be zero');
    }
    let result = parseFloat(numenator / denomenator);
    return result;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// console.log(divideNums(3,6));
// console.log(divideNums(3,0));

//              Finally Block

function finallyBlock() {
  try {
    console.log(`This is the try block`);
    throw new Error ('There was unknown error');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally{
    console.log(`All block were executed`);
  }
}

// finallyBlock();

//              Custom Error Object

class customError extends Error {
  constructor(msg){
    super(msg)
  }
}

function customErr() {
  try {
    throw new customError('This is Built In Error');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally{
    console.log(`Code Executed Successfully`);
  }  
}

// customErr();

class valildateString extends Error {
  constructor(msg){
    super(msg);
  }
}

function checkString(str) {
  try {
    if(str.length < 0 || str === ""){
      throw new valildateString(`String cannot be empty!!!`)
    }
    else {
      return console.log(`String is Ok to go`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
// checkString("Name");
// checkString("");

//              Error Handling in Promises

const promise1 = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 2);;
    if(randomNum === 0){
      resolve(`Random Num: ${randomNum}`)
    }
    else {
      reject(`Random Num: ${randomNum}`)
    }
  })
}

const promise2 = () => {
  promise1().then((message) => {
    console.log(message);
  }).catch((err) => {
    console.log(`Error Occured: ${err.message}`);
  });  
}

// promise2();

async function promiseAsyncAwait() {
  try {
    const result = await promise1();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// promiseAsyncAwait();


//              GraceFul Error Handling in Fetch

function fetchData() {
  fetch('https://invalidUrlapi')
  .then((res)=> res.json)
  .then(data => console.log(data))
  .catch(error => console.log(`Error: ${error.message}`))
}

// fetchData();

async function fetchDataAsyncAwait() {
  try {
    const result = await fetch('https://InvalidUrl');
    const data = result.json();
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// fetchDataAsyncAwait();

//        /*******************************************************/
//        /********************** Scripts ************************/
//        /*******************************************************/

//        Basic Error Handling Script

function basicErrorHandling(numenator, denomenator) {
  try {
    if(denomenator === 0){
      throw new Error (`Denomenator Can't be Zero`)  
    }
    let result =  parseFloat(numenator / denomenator)
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(`Youre code has been executed`);
  }
}

// basicErrorHandling(4,7);
// basicErrorHandling(4);

//        Custom Error Handling Script

class custErr extends Error {
  constructor(msg){
    super(msg)
  }
}

function customErrorHandling() {
  try {
    throw new custErr('This is a Custom Error')
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log(`Code has been executed`);
  }
}

// customErrorHandling();

//        Promise Handling Script

function promiseHandling() {

  // Promise
  function getDataPromise() {
    fetch('https://invalidUrlapi')
    .then((res)=> res.json)
    .then(data => console.log(data))
    .catch(error => console.log(`Error: ${error.message}`))
    .finally(() => console.log('Code Executed'))
  }
  // Async Await
  async function fetchDataTryCatch (){
    try {
      const response = await fetch('https://invalidrul/api');
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  getDataPromise();
  fetchDataTryCatch();
}
// promiseHandling();

//        Fetch Error Handling Script

function handelErrors() {
  fetch('https://invalidURl')
  .then(res => res.json)
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
  .finally(() => console.log(`Promise Fulfilled`))
}

handelErrors();