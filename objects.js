//        /********************** Object Creation and Access ***********************/

const book = {
  title : 'Surrounded by Psychopaths',
  author : 'Thomas Erikson',
  yearPublished : 2009,
}

// console.log(book);
// console.log(`Title: ${book.title}`);
// console.log(`Author: ${book.author}`);


//        /********************** Object Methods ***********************/

// const book = {
//   title : 'Surrounded by Psychopaths',
//   author : 'Thomas Erikson',
//   yearPublished : 2009,
//   details: function () {return `Title: ${this.title}, Author: ${this.author}`},
//   updateYear: function (year) {this.yearPublished = year}
// }

// let details = book.details();
// console.log(details);
// Or
// console.log(book.details());

// console.log(book);
// book.updateYear(2010);
// console.log(book);
// book.updateYear(2016);
// console.log(book);

//        /********************** Nested Objects ***********************/

// const library = {
//   name : 'Public Library',
//   books : [
//     {
//       title : 'ABC',
//       author: 'Abc',
//     },
//     {
//       title : 'DEF',
//       author: 'Abc',
//     },
//     {
//       title : 'JHI',
//       author: 'Abc',
//     }
//   ]
// } 
// console.log(library);

// console.log(`Library Name: ${library.name}`);

// for (let i = 0; i < library.books.length; i++) {
//   console.log(`Title: ${library.books[i].title}`);
// }

//        /********************** this keyword ***********************/
// const book = {
//   title : 'Surrounded by Psychopaths',
//   author : 'Thomas Erikson',
//   yearPublished : 2009,
//   getDetails: function(){return `Title: ${this.title}, Author: ${this.author}`}
// }

// console.log(book.getDetails());

//        /********************** Object Itteration ***********************/

// const book = {
//   title : 'Surrounded by Psychopaths',
//   author : 'Thomas Erikson',
//   yearPublished : 2009,
//   currentEdition: 14
  // getDetails: function(){return `Title: ${this.title}, Author: ${this.author}`}
// }

// for (let b in book) {
//   console.log(b, book[b]);
// }

// console.log(`Keys: ${Object.keys(book)}`);
// console.log(`Values: ${Object.values(book)}`);


// let keys = Object.keys(book)
// let values = Object.values(book)

// console.log(`Keys: ${keys}`);
// console.log(`Values: ${values}`);

//        /********************** Book Object Script ***********************/

// function bookScript() {
//   let book = {
//     title : 'Guns, Germs and Steel',
//     author: 'David Diamont',
//     yearPub : 2001,
//   }
//   book.getDetails = function(){
//     return `Title: ${this.title}, Author: ${this.author}`
//   }
//   console.log(book);
//   console.log(book.getDetails());;
// }

// bookScript();

//        /********************** Library Object Script ***********************/

// function libraryScript() {
//   let library = {
//     name : 'Jinnah Library',
//     books : [
//       {
//         title : 'Abc',
//         author : 'Ahmed'
//       },
//       {
//         title : 'def',
//         author : 'Muj'
//       },
//       {
//         title : 'xyz',
//         author : 'wal'
//       },
//     ]
//   }
//   console.log(`Library Details\nName: ${library.name}\nTotal Books: ${library.books.length}`);
// }
// libraryScript();

//        /********************** Object Itteration Script ***********************/

// for (const key in book) {
//   console.log(`${key}: ${book[key]}`);
// }

// for(let i = 0; i < Object.keys(book).length; i++){
//   console.log(Object.keys(book), Object.values(book));
// }