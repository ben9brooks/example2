import Book from "./book.js";

import Phone from "./phone.js";

const myBook = new Book(
    "Harry Potter",
    350,
    "open",
    "red",
    "black"
);

console.log("My new book", myBook);

window.myPhone = new Phone(
    "iPhone",
    "black",
    1,
    3,
    90,
    "off"
);

console.log("My phone", myPhone);

document.getElementById("output").innerHTML = `
    <div>
        <h2>output</h2>
    </div>
`;

//console log phone data