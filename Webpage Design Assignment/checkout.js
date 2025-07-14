// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    const cartList = document.getElementById('checkout-cart-list');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = ''; // Clear current cart list

    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<li>Your cart is empty</li>';
    } else {
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
            total += item.price;
        });
    }

    cartTotal.textContent = total.toFixed(2); // Update total price
}

// Function to clear the cart
document.getElementById('clear-cart').addEventListener('click', function() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart)); // Clear cart in localStorage
    displayCartItems(); // Update cart display
});

// Event listener for the checkout button
document.getElementById('checkout').addEventListener('click', function() {
    window.location.href = 'delivery.html'; // Redirect to delivery page
});

// Display cart items when the page loads
displayCartItems();
