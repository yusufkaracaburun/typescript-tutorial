const me = {
    name: "yusuf",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "details", 250);
docTwo = new Payment("mario", "details", 260);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice("mario", " work on web", 200);
console.log(invOne);
let invoices = [];
invoices.push(invOne);
console.log(invoices);
invOne.client = "luigi";
invOne.amount = 350;
//  tsc -w to compile ts files to js
// ! betekent dat het geen null teruggeeft en we de melding van ts kunnen negeren
// ! ik weet dat het bestaat
const anchor = document.querySelector("a");
console.log(anchor.href);
// cast to a type
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance;
const ul = document.querySelector('ul');
const li = new ListTemplate(ul);
// add eventlistener, when someone adds
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    li.render(doc, type.value, 'end');
});
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON"; //4
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of' }
};
const docFour = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { title: 'name of' }
};
console.log(docThree, docFour);
// tuples (pos is fixed)
let tup = ['yu', 10, true];
