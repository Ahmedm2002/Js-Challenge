let marks = 98;

switch (true) {
  case marks >= 90:
    console.log(`Grade: A`);
    break;
  
  case marks >= 80 && marks < 90:
    console.log(`Grade: B`);
    break;

  case marks >= 70 && marks < 80:
    console.log(`Grade: C`);
    break;

  case marks >= 60 && marks < 70:
    console.log(`Grade: D`);
    break;

  default:
    console.log(`Grade: Fail`);
    break;
}


let num = 10;
num % 2 === 0 ? console.log('Even') : console.log('Odd');

let year = 2024 ;
if(year % 4 == 0){
  if (year % 100) 
    if (year % 400) 
      console.log('Leap Year');
}
else console.log('Not a leap year');

function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive.`);
  } else if (num < 0) {
    console.log(`${num} is negative.`);
  } else {
    console.log(`${num} is zero.`);
  }
}

// Test the function
let number = -5;
checkNumber(number);

number = 0;
checkNumber(number);

number = 10;
checkNumber(number);


function checkElligibilty(age) {
  if(age >= 18 ) console.log('You Are Elligible to vote');
  else console.log('You are under Age for voting');
}

checkElligibilty(18)
checkElligibilty(21)
checkElligibilty(12)
checkElligibilty(89)

function checkDay(day) {
  switch (day) {
    
    case 1:
      console.log('Mon');
      break;
    
    case 2:
      console.log('Tue');
      break;


    case 3:
      console.log('Wed');
      break;
    
    case 4:
      console.log('Thu');
      break;

    case 5:
      console.log('Fri');
      break;

    case 6:
      console.log('Sat');
      break;

    case 7:
      console.log('Sun');
      break;

    default:
      console.log('Invalid Day');
      break;
  }
}

checkDay(1);
checkDay(4);
checkDay(8);
checkDay(5);


function checkLeapYear(year) {
  if(year % 4 === 0)
    console.log(`It's a Leap Year`);
  else console.log(`Not a Leap Year`);
}

checkLeapYear(2024)
checkLeapYear(2022)
checkLeapYear(2020)