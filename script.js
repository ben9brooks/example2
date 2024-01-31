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
<h1 class="phone_model phone_name" id="model">My Phone: ${myPhone.model}</h1>
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
{/* <article class="phone" id="everyday">   </article> */}
const newArticle = document.createElement("article"); 
newArticle.classList.add("phone");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

const main = document.querySelector("main");
main.prepend(newArticle);


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

// document.querySelector("main").innerHTML = content;




const navContent = `
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About</a></li>
`;

function createNavMenu(document) {
    // add the list items above into an unordered list (<ul>)
    const ul = document.createElement("ul");
    ul.innerHTML = navContent;
    // add the ul into a nav container (<nav>)
    const nav = document.createElement("nav");
    nav.appendChild(ul);
    // give the nav element the class "main-navigation"
    nav.classList.add("main-navigation");
    // append the nav element to the existing element with class "siteheader"
    const header = document.querySelector(".siteheader")
    header.append(nav);
}

//test it:
createNavMenu(document);