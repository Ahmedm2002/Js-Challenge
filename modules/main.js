//              Creating and Exporting Modules

import {sum} from './addfunc.js'
import {obj} from './person.js'

console.log(sum(1,2,3,4,5));
console.log(`Object: ${obj}`);

//              Named and default Modules

import { randomNum, greetings, signup } from './functions.js';

import singleFunc from "./singleFunc.js";

console.log(randomNum());
greetings();
signup();
singleFunc();

//              Import Entire Modules

import { PI, GREETING_MESSAGE, add, subtract, multiply, divide, greet} from './entireModule.js'

console.log(PI);
console.log(GREETING_MESSAGE);
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
greet(); 

//              Uisng Third-Party Modules
