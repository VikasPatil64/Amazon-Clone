
// Get the cart from localStorage
let cart = getCartDetails();

// Function to render the cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = ''; // Clear the existing cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }


    cart.forEach((product, index) => {

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';

        cartItemElement.innerHTML = `
            <img src="/${product.image}" alt="${product.name}">
            <div class="cart-item-details">
                <h4>${product.name}</h4>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <div class="cart-action">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

}

// Function to update the quantity of a product
function updateQuantity(index, change) {
    const product = cart[index];
    const newQuantity = product.quantity + change;

    if (newQuantity <= 0) {
        // Remove product from cart if quantity becomes zero or negative
        cart.splice(index, 1);
    } else {
        // Update quantity
        product.quantity = newQuantity;
    }

    setCartDetails(cart);
    renderCart(); // Re-render the cart after update
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove product from cart array
    setCartDetails(cart);
    renderCart(); // Re-render the cart after removal
}

// Call renderCart when the page loads
window.onload = renderCart;
