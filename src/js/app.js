"use strict";

console.log(this);

function Cart(name) {
  this.items = [];
  this.name = name;

  this.hello = () => {
    console.log("Hello ", this.name);
  };
  this.addToCart = (item) => {
    this.items.push(item);
  };

  this.print = () => {
    console.log(this.items);
  };

  // return this
}

// demo();
const cart1 = new Cart("Евгений"); // this - 1
const cart2 = new Cart("Дамир"); // this - 2

cart1.hello();
cart2.hello();

const hello2 = cart2.hello.bind({});
hello2();

const User = {
  name: "User",
  sayHello(...args) {
    console.log("User.this", this);
    console.log("User ...args", args);
    console.log("Hello ", this.name);
  },
};

User.sayHello();

let sayHello = User.sayHello.bind(User, 1, 2, 3);
sayHello = sayHello.bind({ name: "Дамир" }, 4, 5, 6);
sayHello();

function fetchUsers(pagination = {}) {
  console.log("pagination", pagination);
}

const pagination = {
  page: 1,
  itemsPerPage: 100,
};
const fetchUsersWithPagination = fetchUsers.bind(null, pagination);

fetchUsersWithPagination();

setTimeout(() => {
  pagination.page = 2;
  fetchUsersWithPagination();
}, 1_000);

class Book {
  constructor(title) {
    this.title = title;

    this.print = this.print.bind(this);
  }

  print() {
    console.log("Book name ", this.title);
  }
}

const book = new Book("JavaScript");
book.print(); // JavaScript

const print = book.print;
print(); // undefined
