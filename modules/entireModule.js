const PI = 3.14159;
const GREETING_MESSAGE = "Hello, welcome to our module!";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};
const greet = () => {
  console.log(GREETING_MESSAGE);
};

export { PI, GREETING_MESSAGE, add, subtract, multiply, divide, greet };
