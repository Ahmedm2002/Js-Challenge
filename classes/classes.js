//                        Class Definition

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fulName() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }

  greetings() {
    console.log(`Welcome Mr.${this.firstName} ${this.lastName}`);
  }

  updateAge(age) {
    this.age = age;
    console.log(`Mr.${this.firstName} ${this.lastName} your updated age is ${this.age}`);
  }

  static helloRandom() {
    console.log('Hello My Anonymous, Good to have to here');
  }

  set Name(name) {
    [this.firstName, this.lastName] = name.split(' ');
    console.log(`Updated Name: ${this.firstName} ${this.lastName}`);
  }
}

const Mark = new Person('Mark', 'Wood', 21);
Mark.greetings();
console.log(Mark);

Mark.updateAge(23)

console.log(Mark);

const john = new Person('John', 'Doe', 17);
john.greetings();
console.log(john);

john.updateAge(18)

console.log(john);

//                            Class Inheritance

class Student extends Person {
  static noOfStudents = 0;

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
    Student.noOfStudents++;
  }

  getStudentId() {
    return `Your Student Id is ${this.studentId}`;
  }

  greetings() {
    console.log(`Welcome Mr.${this.firstName} ${this.lastName}, your details are Age: ${this.age} StudentId: ${this.studentId}`);
  }

  static totalStudents() {
    console.log(`Total Students: ${this.noOfStudents}`);
  }
}

let stud1 = new Student('Aliceson', 'John', 35, Math.floor(Math.random() * 10000));

console.log(stud1.getStudentId());
stud1.greetings();

console.log(stud1);

//                    Static Methods and Properties

Person.helloRandom();
Student.totalStudents();

//                    Getter and Setters

const thomas = new Person('Thomas', 'Erikson', 59);
console.log(thomas.fulName);
thomas.Name = 'Tom Erik';
console.log(thomas.fulName);


//                    Private Fields

class Account{
  #balance;
  constructor(name , passowrd, balance = 0.0){
    this.name = name;
    this.passowrd = passowrd;
    this.balance = balance
  }
  depositMoney(amount){
    this.balance += amount;
    console.log(`Amount Added Successfully\nNew Balance: ${this.balance}`);
  }
  withdrawMondy(amount){
    if(this.balance >= amount){
      this.balance -= amount;
      console.log(`Amount Withdrawn: ${amount}\nRemaining Balance: ${this.balance}`);
    }
    else{
      console.log(`Not Enough Money`);      
    }
  }
  get AccountDetails(){
    console.log(`Balance: ${this.balance}\nName: ${this.name}\nPassword: ${this.passowrd}`)
  }
}

const savings = new Account('Savings Account', 'saving123@', 55000.391)
savings.AccountDetails;
savings.withdrawMondy(500)
savings.depositMoney(1000)