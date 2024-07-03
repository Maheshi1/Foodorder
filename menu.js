// JavaScript code for menu functionality

// Get all elements with the class "menu-item"
const menuItems = document.querySelectorAll('.menu-item');

// Loop through each menu item
menuItems.forEach(item => {
    // Add click event listener to each menu item
    item.addEventListener('click', () => {
        // Get the text content of the selected menu item
        const menuItemText = item.querySelector('p').textContent;
        // Display an alert with the selected menu item text
        alert(`You selected: ${menuItemText}`);
    });
});
