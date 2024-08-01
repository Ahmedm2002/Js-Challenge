//        /********************** For Loop  ***********************/

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}`);  
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);  
// }

//        /********************** While Loop  ***********************/


// let i = 1, sum = 0;
// while( i <= 10){
//   sum += i;
//   i++;
// }
// console.log(`Sum: ${sum}`);

// let i = 10;
// while (i >= 1) {
//   console.log(`${i}`);
//   i--;
// }

//        /********************** Do-while Loop  ***********************/

// let i = 1;
// do {
//   console.log(`${i}`);
//   i++;
// } while (i <= 5);

// let fact = 1, num = 5 ;
// do {
//   fact = fact * num;
//   num--;
// } while (num > 0);

// console.log(`Factorial: ${fact}`);


//        /********************** Nested Loops  ***********************/

// for (let i = 0; i < 5; i++) {
//   let row = '';
//   for (let j = 0; j <=i ; j++) {
//     row += '*';
//   }
//   console.log(row);
// }

//        /********************** Loop control statments  ***********************/

// let i = 1;
// while (i <= 10) {
//   if( i == 5 ){
//     continue;
//   }
//   else{
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   if(i == 5){
//     continue;
//   }
//   else{
//     console.log(`${i}`);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if( i == 7) break;
//   else console.log(i);
// }

//        /********************** Feature Request  ***********************/
// 1.
// console.log(`1-10 with For Loop`);
// for (let i = 0; i <= 10; i++) {
//   console.log(i);  
// }

// console.log(`1-10 with While Loop`);
// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// 2.

// function printTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${ num * i}`);
//   }
// }
// printTable(5);
// printTable(15);
// printTable(45);

// function printPattern(char) {
//   for (let i = 0; i < 5; i++) {
//    let row = ''; 
//     for (let j = 0; j <= i; j++) {
//      row += char; 
//     }
//     console.log(row);
//   }
// }

// printPattern('$')
// printPattern('*')
// printPattern('-')

// function sumNumbers() {
//   let sum = 0;
//   for (let i = 0; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`Sum: ${sum}`);
// }
// sumNumbers();

// function calculateFactorial(num) {
//   let fact = 1;
//   do {
//     fact = fact * num;
//     num --;
//   } while (num > 0);
//   console.log(`Factorial: ${fact}`);
// }

// calculateFactorial(4);
// calculateFactorial(5);
// calculateFactorial(6);