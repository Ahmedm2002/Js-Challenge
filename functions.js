//        /********************** Function Declaration  ***********************/

// function checkEvenOdd(num){
//   if(num % 2 == 0) console.log('Number is Even');
//   else console.log('Num is Odd');
// }

// checkEvenOdd(4);
// checkEvenOdd(55);

// function square(num) {
//   return num * num
// }

// console.log(square(7));
// console.log(square(9));

//        /********************** Function Expression  ***********************/

// function findMax(a, b) {
//   if( a > b ) return console.log(`A is greater`);
//   else if ( b > a ) return console.log('B is greater');
//   else return console.log('Both are equal');
// }

// findMax(4, 6);

// function concatString(a, b ) {
//   return a + ' ' + b; 
// }
// console.log(concatString('Ahmed', 'Mujtaba'));

//        /********************** Arrow Functions  ***********************/

// const calculateSum = (a,b) =>  a + b;

// console.log(calculateSum(3,5));

// const checkChar = (str, char) =>  str.includes(char)

// console.log(checkChar('Ahmed Mujtaba', 'j'));

//        /********************** Functions Parameters and default values  ***********************/

// function product(a, b = 8 ) {
//   return a * b;
// }

// console.log(product(2, 7));

// function greetings(name , age = 18) {
//   return `Welcome Mr. ${name}, your age is ${age}` 
// }

// console.log(greetings('Ahmed Mujtaba'));
// console.log(greetings('Waleed Mustafa', 17));

//        /********************** Higher-Order Functions ***********************/

// function executeMultpleTimes( func, num) {
//   for(let i = 0 ; i < num ; i++)
//   func();
// }

// executeMultpleTimes(()=>{console.log('Hi there');}, 4)

// function twoFuncsInput(func1, func2, val) {
//   const result = func1(val);
//   const result2 = func2(val)
//   console.log(result, result2);
// }

// twoFuncsInput((val)=> (val + 3), (val) => (val * 3), 5)