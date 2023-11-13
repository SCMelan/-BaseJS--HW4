// const fromNumToObj = (num) => {
//     if (num > 999 || num < 0 || typeof num !== "number") {
//       console.log("Ошибка");
//       return {};
//     }
//     return {
//       hundreds: Math.floor(num / 100),
//       tens: Math.floor(num / 10) % 10,
//       units: num % 10,
//     };
//   };
//   console.log(fromNumToObj(478));

// //es6
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   make25PercentDiscount() {
//     this.price *= 0.75;
//   }
// }

// const prd1 = new Product(1, 200);

// //es5
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// Product.prototype.make25PercentDiscount = function () {
//   this.price *= 0.75;
// };

// const product = new Product(1, 100);

// // es6;
// class Post {
//   constructor(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
//   }

//   edit() {
//     this.text = prompt();
//   }
// }

// Post.prototype.edit = function () {
//   this.text = prompt();
// };

// class AttachedPost extends Post {
//   constructor(author, text, date) {
//     super(author, text, date);
//     this.highlighted = false;
//   }
//   makeTextHighlighted() {
//     this.highlighted = true;
//   }
// }

// //es5
// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
//   }

// function AttachedPost(author, text, date) {
//   this.highlighted = false;
//   Post.call(this, author, text, date);
// }

// AttachedPost.prototype.makeTextHighlighted = function () {
//   this.highlighted = true;
// };

// const abc = new AttachedPost(1, "222", 15);
