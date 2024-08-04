const randomNum = () => {
  return Math.floor(Math.random() * 2);
}

const greetings = () => {
  console.log(`Hello there`);
}

const signup = () => {
  console.log('Create an account on BlogBook.digihut.pk');
}

export { randomNum, greetings, signup };
