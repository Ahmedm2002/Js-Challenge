//        /********************** Template Literal ***********************/

let name = 'Ahmed';
const age = 21;

const str = `Hello ${name}, your age is ${age}`;
console.log(str);

const str1 = `
  This is a 
  Multiline template litteral 
  Mr. ${name}
`
console.log(str1);

//        /********************** Destructring ***********************/
//  Array
let arr = [1,2,3,4,5];
const firstEle = arr[0];
const secondEle = arr[1];

console.log(`First Element: ${firstEle}\nSecond Element: ${secondEle}`);

// Object 

let book = {
  title : 'Surrounded By Psychopaths',
  author : 'Thomas Erikson',
  publishedYear : 1998
}

const title = book['title'];
const author = book['author'];
const publishedYear = book['publishedYear'];

console.log(`Title: ${title}\nAuthor: ${author}\nPublished Year: ${publishedYear}`);

//        /********************** Spread and Rest Operators ***********************/

//    Spread Operator 

let arr2 = [...arr, 6,7,8,9];
console.log(arr2);

//    Rest Operator 

function sumCart(...numbers) {
  return numbers.reduce((total, value, index, numbers)=>(total + value));
}

console.log(sumCart(5,5,5,5,5,5,5));

//        /********************** Defalult Parameters ***********************/

function product(a, b = 1){
  return a * b;
}

console.log(product(4));
console.log(product(4,5));

//        /********************** Enhanced Object Literals ***********************/

//      Object Literal

let car = {
  make : 'Honda',
  model : 'Civic',
  year : 2002,

  getDetails : function (){
    console.log(`Company: ${this.make}\nModel: ${this.model}`);
  }
}

car.getDetails();

const fullName = 'Ahmed Mujtaba';
const person_Age = 22;
const nationality = 'Pakistan'
const hiThere = ()=>(console.log(`Hi There`))

//        Computed Property

let key1 = 'Name';
let key2 = 'Date of Birth';
let key3 = 'City'

let val1 = 'Ahmed Mujtaba';
let val2 = 2002;
let val3 = 'Karachi';  

const personDetails = {
  [key1] : val1,
  [key2] : val2,
  [key3] : val3
}

console.log(personDetails);


//        /*******************************************************/
//        /********************** Scripts ************************/
//        /*******************************************************/

//      Template Literal String

function templateLiteral() {
  const name = 'Ahmed'
  const age = 22;
  const city = 'Islamabad';
  const hobby = 'Programming'

  let str = `
    My name is ${name} and age is ${age}
    I live in ${city} and my hobby is ${hobby}
    `
  console.log(str);
}

templateLiteral();


//     Destructuring 

function destructure() {
  let arr = ['a', 'b', 'c'];
  let obj = {
    val1 : 12,
    val2 : 15,
  }

  console.log(arr[1]);
  console.log(obj.val1);
  console.log(obj['val2']);

  const {val2} = obj;

  console.log(`Val2: ${val2}`);  

}

destructure();

//     Spread and Rest 

function restAndSpread() {
  let arr1 = [1,2,3,4,5];
  let arr2 = [6,7,8,9,10];

  let arr3 = [...arr1, ...arr2, 11,12,13];

  console.log(arr3);

  function multipleInputs(...args){
    return args.reduce((total, value , index, args)=>(total + value))
  }

  console.log(multipleInputs(1,2,3,4,5));

}

restAndSpread();

//     Default Paramaters

function defaultParams(a , b = 10) {
  return a * b;
}

console.log(defaultParams(3));
console.log(defaultParams(3,5));

//     Enhanced Object Literals

const company = 'Dell Inc.'; 
const model = 'Latitude E6430';
const configs = '4/256 Ram/HDD';

let laptop = {company, model , configs}
console.log(laptop);