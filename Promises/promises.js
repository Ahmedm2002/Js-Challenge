const axios = require('axios');
// Understanding Promises

let message = 'Very Important Message for the Digihut.pk team';

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Message: ${message}`);
  }, 2000);
}).then((message) => {
  console.log(message)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred in resolving promise')
  }, 2000);
}).catch((err) => {
  console.log(err);
})

//                                  Chaining Promises

const fetchData1 = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve('Fetched Data 1')
  }, 1000);
})

const fetchData2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fetched Data 2')
  }, 1000);
})

fetchData1.then((message1) => {
  console.log(message1);
  return fetchData2;
}).then((message2) => {
  console.log(message2);
})

//                           Async Await

const fetchData3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Fetched');
    }, 1000);
  })
}

async function asynFunc() {
  let data = await fetchData3();
  console.log(data);
}
asynFunc();

const fetchData4 = () => {
  return new Promise((resolve, reject) => {
    reject('Network Error, please try again')
  })
}

const tryCatchFunc = async () => {
  try {
    let data = await fetchData4();
  } catch (error) {
    console.log(error);
  }
}
tryCatchFunc();

//                Fetching Data from an Api

fetch('https://randomuser.me/api')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

const fetchData5 = async function () {
  try {
    const response = await axios.get('https://randomuser.me/api');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
fetchData5();

//        /*******************************************************/
//        /********************** Scripts ************************/
//        /*******************************************************/

//              Promise Creation

function promiseCreation(){
  const resolvedPromise = new Promise((resolve, reject) => {
    resolve('Promise Resolved');
  })
  resolvedPromise.then(message => console.log(message))

  const rejectedPromise = new Promise((resolve, reject) => {
    reject('Bad Request, Try Again Later')
  })
  rejectedPromise.catch(error => console.log(error))
}
promiseCreation();

//              Promise Chaining 

function promiseChaining() {
  const fetchData1 = new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve('Fetched Data 1')
    }, 1000);
  })

  const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fetched Data 2')
    }, 1000);
  })

  fetchData1.then((message1) => {
    console.log(message1);
    return fetchData2;
  }).then((message2) => {
    console.log(message2);
  })

}
promiseChaining();

//              Async Await

const asyncAwait = async () => {
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
asyncAwait();

//            Fetch Data From api fetch and async await

function getApiData() {
  fetch('https://randomuser.me/api').then((res) => res.json()).then(data => console.log(data)).catch(error => console.log(error))

  async function getData(){
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = response.json();
      console.log(data);  
    } catch (error) {
      console.log(error);
    }
  }
  getData();
}
getApiData()