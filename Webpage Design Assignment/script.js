// Initialize the cart from local storage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(product, price) {
    const item = {
        product: product,
        price: parseFloat(price)
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    updateCartCount(); // Update the cart count
    alert(`${product} has been added to your cart!`);
}

// Function to update the cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Set the cart count to the number of items in the cart
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = this.getAttribute('data-price');
        addToCart(product, price);
    });
});

// Update the cart count when the page loads
updateCartCount();

