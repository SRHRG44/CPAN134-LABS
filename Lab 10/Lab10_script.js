<script>
// Select the button and paragraph elements
const changeTextBtn = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

// Add event listener to the button
changeTextBtn.addEventListener("click", function() {
  // Change the text content of the paragraph
  message.textContent = "Text changed successfully!";
});
    </script>