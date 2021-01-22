"use strict";
let character = "luigi";
let age = 32;
let isBlackBelt = false;
const inputs = document.querySelectorAll(" input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(1111));
let uid;
uid = "me";
uid = 20;
let mixed = [];
mixed.push("string");
mixed.push(20);
mixed.push(true);
let ninja = [];
ninja.push("me");
let object;
object = { name: "me", age: 20 };
let objectTwo;
objectTwo = { name: "aaa", age: 20 };
let any = 25;
any = true;
any = "me";
any = { name: "me" };
let mix = [];
mix.push("me");
mix.push(20);
mix.push(true);
console.log("testingg");
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
const greetAgain = (user) => {
    console.log(`${user.name} says Hello!`);
};
let greetOne;
greetOne = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
