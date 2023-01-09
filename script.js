// javascript object
// array example
const userArray = ["adrita", "Adhikary", 2017];
// console.log(userArray);
// console.log(userArray[0]);
// // object example
// const userObject = {
//   firstName: "Adrita",
//   lastName: "Adhikary",
//   birthYear: 2017,
//   className: "One",
// };
// console.log(userObject);
// console.log(userObject["lastName"]);
// console.log(userObject.firstName);
// console.log(userObject.birthYear);

// // Add new item
// userObject.hobby = "Drawing";
// console.log(userObject);

// userObject["birthPlace"] = "Khulna";
// console.log(userObject);

// // Another object example
// const userObjectTwo = {
//   firstName: "Biswajit",
//   lastName: "Adhikary",
//   isJob: true,
//   calculateAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };

// console.log(userObjectTwo);
// console.log(userObjectTwo.calculateAge(1988));
// console.log(userObjectTwo["calculateAge"](1988));

// // Another Example
// const userObjectThree = {
//   firstName: "Bapi",
//   lastName: "Biswas",
//   hobby: "Travelling",
//   calculateAge: function (birthYear) {
//     const Age = 2022 - birthYear;
//     return Age;
//   },
// };
// console.log(userObjectThree);
// console.log(userObjectThree.calculateAge(1991));
// console.log(userObjectThree["calculateAge"](1991));

// This Keyword
// const userObjectThree = {
//   firstName: "Bapi",
//   lastName: "Biswas",
//   hobby: "Travelling",
//   birthYear: 1991,
//   calculateAge: function () {
//     return 2022 - this.birthYear;
//   },
//   userDetails: function () {
//     return `This is User ${this.firstName} ${this.lastName}, born in ${this.birthYear}.`;
//   },
// };
// console.log(userObjectThree.calculateAge());
// console.log(userObjectThree.userDetails());

// Loop***
// For loop
// console.log("task 1");
// console.log("task 2");
// console.log("task 3");
// console.log("task 4");
// console.log("task 5");
// console.log("task 6");
// console.log("task 7");
// console.log("task 8");

// for (let i = 1; i <= 10; i++) {
//   console.log(`task ${i}`);
// }

// While loop
// console.log("task 1");
// console.log("task 2");
// console.log("task 3");
// console.log("task 4");
// console.log("task 5");
// console.log("task 6");
// console.log("task 7");
// console.log("task 8");

// let i = 1;
// while (i <= 8) {
//   console.log(`task ${i}`);
//   i++;
// }

// Array
// const newArray = ["data 1", "data 2", "data 3", "data 4", "data 5", "data 6"];
// console.log(newArray);
// // console.log(newArray[0]);
// // console.log(newArray[1]);
// // console.log(newArray[2]);
// // console.log(newArray[3]);
// // console.log(newArray[4]);

// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// backward
// for (let i = newArray.length - 1; i >= 0; i--) {
//   console.log(newArray[i]);
// }

// loop Break
// for (let i = 0; i <= newArray.length; i++) {
//   if (i == 4) break;
//   console.log(newArray[i]);
// }

// // loop continue (skip)
// for (let i = 0; i < newArray.length; i++) {
//   if (i == 4) continue;
//   console.log(newArray[i]);
// }

// Index of
const newArray = ["data 1", "data 2", "data 3", "data 4", "data 5", "data 6"];

console.log(newArray.indexOf("data 5"));

// Includes
console.log(newArray.includes("data 8"));
