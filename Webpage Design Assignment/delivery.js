// Handle form submission
document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show the message when the address is saved
    const message = document.getElementById('message');
    message.textContent = 'Address Saved';
    message.style.display = 'block'; // Show the message

    // Redirect to payment page after a brief delay
    setTimeout(() => {
        window.location.href = 'payment.html'; // Redirect to the payment page
    }, 2000); // Redirect after 2 seconds
});
