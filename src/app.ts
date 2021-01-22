interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "yusuf",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};

greetPerson(me);

console.log(me);

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne = new Invoice("yoshi", "details", 250);
docTwo = new Payment("mario", "details", 260);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invOne = new Invoice("mario", " work on web", 200);
console.log(invOne);

let invoices: Invoice[] = [];
invoices.push(invOne);
console.log(invoices);

invOne.client = "luigi";
invOne.amount = 350;

//  tsc -w to compile ts files to js
// ! betekent dat het geen null teruggeeft en we de melding van ts kunnen negeren
// ! ik weet dat het bestaat
const anchor = document.querySelector("a")!;
console.log(anchor.href);

// cast to a type
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance;
const ul = document.querySelector('ul')!;
const li = new ListTemplate(ul);

// add eventlistener, when someone adds
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];
  
  let doc: HasFormatter;
  if (type.value === 'invoice'){
      doc = new Invoice(...values);
  } else {
      doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  li.render(doc, type.value, 'end');
  
});

// ENUMS
enum ResourceType {
    BOOK, //0
    AUTHOR, //1
    FILM, //2
    DIRECTOR, //3
    PERSON //4
}

// Generics
interface Resource<T> {
    uid: number,
    resourceType: ResourceType;
    data: T,
}

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'name of'}
}

const docFour: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: {title: 'name of'}
}
console.log(docThree, docFour);

// tuples (pos is fixed)
let tup: [string, number, boolean] = ['yu', 10, true];
