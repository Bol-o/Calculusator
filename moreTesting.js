function Book(title, author, numbPages){
    this.title = title;
    this.author = author;
    this.numbPages = numbPages;
    // this.info = function(){
    //     return title + ' '+ author+ ', '+ numbPages + ' pages'+ ', ' + 'not read yet'
    // }
};

const theHobbit = new Book('The Hobbit by J.R.R.', 'Tolkien', '295' );
console.log(theHobbit.title);
// console.log(Object.getPrototypeOf(Book));
// console.log(Object.getPrototypeOf(theHobbit) == Book.prototype)
function Player(){};
Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 const player1 = new Player();
 const player2 = new Player();
 player1.sayHello(); // logs "Hello, I'm a player!"
 player2.sayHello(); // logs "Hello, I'm a player!"
 console.log(theHobbit.valueOf());