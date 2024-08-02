// let arr1 = [1,2,3,4,5]

//        /********************** Array Creation & Access ***********************/

// console.log(arr1);
// console.log(`First Element: ${arr1[0]}`);
// console.log(`Last Element: ${arr1[arr1.length-1]}`);


//        /********************** Basic Array Methods ***********************/

// arr1.push(6);    // add value 6 in the array at last index 
// console.log(arr1);
// arr1.pop()       // removes/deletes last element in the array
// console.log(arr1);
// arr1.shift()      // removes/deletes first element of the array
// console.log(arr1);
// arr1.unshift(-1,0,1)  // add/inserts new values in the beginning of the array
// console.log(arr1);


//        /********************** Intermediate Array Methods ***********************/

// let arr2 = arr1.map((x) => 2*x);
// console.log(arr2);

// let arr3 = arr1.filter((num) => num % 2 == 0 )
// console.log(arr3);

// let arr1Sum = arr1.reduce((total, value, arr1)=> {
//   console.log(`Total: ${total}, Value: ${value}, Arr1: ${arr1}`);
//   return total + value
// });

// console.log(arr1Sum);


//        /********************** Array Itteration ***********************/

// for (let i = 0; i <= arr1.length; i++) {
//   console.log(i);
// }

// arr1.forEach((x)=>(console.log(x)))
// let fruits = ['f', 'a', 'c', 't', 'w'];
// arr1.forEach((element) => console.log(element))


//        /********************** Multi-dimentional Array ***********************/

// let array = [ [1,2,3], [4,5,6]];
// console.log(array);

// console.log(array[1][2]);

//        /********************** Array Manipulation Script ***********************/

// function arrOperations(arr) {
//   arr.push(100);
//   console.log(arr);
//   arr.pop();
//   console.log(arr);
//   arr.shift();
//   console.log(arr);
//   arr.unshift(1);
//   console.log(arr);
// }

// let arr1 = [1,2,3,4,5]

// arrOperations(arr1)


//        /********************** Array Transformation Script ***********************/

// function arrayTransformation(arr) {
//   let newArr = arr1.map((num)=>(num*2));
//   console.log(newArr);

//   let newArr1 = arr1.filter((num)=>(num >= 3));
//   console.log(newArr1);

//   let sum = arr1.reduce((total, val, index, arr1) => (total + val));
//   console.log(sum);
// }
// arrayTransformation(arr1);

//        /********************** Array Itteration Script ***********************/

// function arrayItteration(arr) {
//   console.log('Itteration With For Loop');
//   for (let i = 0; i <= arr.length; i++) {
//     console.log(i);    
//   }

//   console.log('Itteration With ForEach Loop');
  
//   arr.forEach(element =>(console.log(element)));

// }

// arrayItteration(arr1);


//        /********************** Two Dimentional Array Script ***********************/

// function twoDimentionalArray() {
//   let twoDArr = [['a', 'b', 'c'], ['d', 'e', 'f']];
//   console.log(twoDArr);
//   twoDArr[0][1] = 'abc';
//   console.log(twoDArr);
//   twoDArr[0].push('x');
//   console.log(twoDArr);
// }

// twoDimentionalArray();