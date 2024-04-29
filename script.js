// script.js

// Get the button element
const myButton = document.getElementById('myButton');

// Add a click event listener
myButton.addEventListener('click', () => {
    // Change button text
    myButton.textContent = 'Clicked!';

    // Add custom styles
    myButton.style.backgroundColor = 'blue';
    myButton.style.color = 'white';
});
