// content-script.ts
console.log('Content script injected!');

// Example: Modify the background color of a webpage
document.body.style.backgroundColor = "lightblue";

// Example: Find and highlight the first paragraph on the page
const firstParagraph = document.querySelector("p");
if (firstParagraph) {
  firstParagraph.style.border = "2px solid red";
}

