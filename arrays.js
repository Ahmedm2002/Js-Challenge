//        /********************** Array Creation & Access ***********************/


let arr1 = [1,2,3,4,5]
console.log(arr1);

console.log(`First Element: ${arr1[0]}`);
console.log(`Last Element: ${arr1[arr1.length-1]}`);


//        /********************** Basic Array Methods ***********************/

arr1.push(6);    // add value 6 in the array at last index 
console.log(arr1);
arr1.pop()       // removes/deletes last element in the array
console.log(arr1);
arr1.shift()      // removes/deletes first element of the array
console.log(arr1);
arr1.unshift(-1,0,1)  // add/inserts new values in the beginning of the array
console.log(arr1);


//        /********************** Intermediate Array Methods ***********************/

let arr2 = arr1.map((x) => 2*x);
console.log(arr2);

let arr3 = arr1.filter((num) => num % 2 == 0 )
console.log(arr3);

let arr1Sum = arr1.reduce((total, value, arr1)=> (total + value));

console.log(arr1Sum);