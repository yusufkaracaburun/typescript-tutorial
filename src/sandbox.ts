let character = "luigi";
let age = 32;
let isBlackBelt = false;

const inputs = document.querySelectorAll(" input");
console.log(inputs);
inputs.forEach((input) => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(1111));

let uid: string | number;
uid = "me";
uid = 20;

let mixed: (string | number | boolean)[] = [];
mixed.push("string");
mixed.push(20);
mixed.push(true);

let ninja: string[] = [];
ninja.push("me");

let object: object;
object = { name: "me", age: 20 };

let objectTwo: {
  name: string;
  age: number;
};
objectTwo = { name: "aaa", age: 20 };

let any: any = 25;
any = true;
any = "me";
any = { name: "me" };

let mix: any[] = [];
mix.push("me");
mix.push(20);
mix.push(true);

console.log("testingg");

let greet: Function;
greet = () => {
  console.log("hello");
};

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
};
add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};
let result = minus(10, 5);

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says Hello!`);
};

let greetOne: (a: string, b: string) => void;
greetOne = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let logDetails: (obj: {name: string, age: number}) => void;
logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
