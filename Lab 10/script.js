// Select the button and paragraph elements
const changeTextBtn = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

// Add event listener to the button
changeTextBtn.addEventListener("click", function () {
  // Change the text content of the paragraph
  message.textContent = "Text changed successfully!";
});

// Function to generate a random color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

/// Execute code when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Set a random background color for the body
  document.body.style.backgroundColor = getRandomColor();

  // Create a new paragraph element
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "New Paragraph added dynamically!";
  document.body.appendChild(newParagraph);
});
