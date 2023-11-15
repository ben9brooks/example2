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

const myPhone = new Phone(
    "iPhone 15",
    "black",
    1,
    3,
    90,
    "off",
    "December 25, 2022 9:00:00 PST"
);

// console.log("My phone", myPhone);

document.getElementById("output").innerHTML = `
    <div>
        <h2>output</h2>
    </div>
`;

const content = `
<h2>My Phone: ${myPhone.model}</h2>
<ul>
    <li>Color: ${myPhone.color}</li>
    <li>Front Camera(s): ${myPhone.frontCameras}</li>
    <li>Back Camera(s): ${myPhone.backCameras}</li>
    <li>Battery Level: ${myPhone.batteryLevel}%</li>
    <li>Status: ${myPhone.status}</li>
    <li>Date Acquired: ${myPhone.dateAcquired}</li>
    <li>Age: ${myPhone.phoneAge()} days</li>
</ul>
`;

console.log(myPhone.dateAcquired);
console.log(myPhone.phoneAge());

const bookOutput = (book) => {
    const bookText = `
    <p> My book is ${book.name}
    and has ${book.pages} pages.
    It is currently ${book.status}.</p>`;
    return bookText;
};

// document.body.innerHTML = bookOutput(myBook);

const newdiv = document.querySelector(".test");
console.log(newdiv)

document.querySelector("main").innerHTML = content;
