function confirmOrder() {
    // Get customer information
    var firstName = document.getElementById("firstname").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    
    // Get selected item
    var selectedItem = document.querySelector('input[name="item"]:checked');
    var itemName = selectedItem ? selectedItem.value : null;
    
    // Check if all fields are filled
    if (firstName && address && contact && itemName) {
        // Display order confirmation
        var orderDetails = document.getElementById("order-details");
        orderDetails.innerHTML = "<p>Order Confirmation:</p>" +
                                 "<p>Name: " + firstName + "</p>" +
                                 "<p>Address: " + address + "</p>" +
                                 "<p>Contact Number: " + contact + "</p>" +
                                 "<p>Item: " + itemName + "</p>";
    } else {
        alert("Please fill in all the fields and select an item.");
    }
}
