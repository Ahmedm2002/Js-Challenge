import {sum} from './addfunc.js'
import {obj} from './person.js'
import { randomNum, greetings, signup } from './functions.js';
import singleFunc from "./singleFunc.js";
import { PI, GREETING_MESSAGE, add, subtract, multiply, divide, greet} from './entireModule.js'
import load from 'lodash'
import axios from "axios";

//              Creating and Exporting Modules

// console.log(sum(1,2,3,4,5));
// console.log(`Object: ${obj}`);

//              Named and default Modules


// console.log(randomNum());
// greetings();
// signup();
// singleFunc();

//              Import Entire Modules


// console.log(PI);
// console.log(GREETING_MESSAGE);
// console.log(add(10, 5));
// console.log(subtract(10, 5));
// console.log(multiply(10, 5));
// console.log(divide(10, 5));
// greet(); 

//              Uisng Third-Party Modules
 
//              lodash

// console.log(load);

// let str = 'this is ahmed mujtaba using lodash library'

// let camelCase = load.camelCase(str);
// console.log(camelCase);
// console.log(load.words(str));
// console.log(load.chunk(str,10));

//              Axios

// let data;
// const getData = async () => {
//   try {
//     data = await axios.get('https://randomuser.me/api');
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(data);
// }

// getData();


//              Module Bundling

