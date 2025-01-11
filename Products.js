
let cart = getCartDetails();

function addcart(index) {
    const product = PRODUCTS[index];
    const existingProduct = cart.find(item =>  item.name === product.name);

    if(!existingProduct) {
        const productCopy = {...product, quantity: 1};
        cart.push(productCopy);
    } else {
        cart = cart.map((item, i) => {
            if(existingProduct.name === item.name) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });
    }
    setCartDetails(cart);
    console.log(cart);
    displayProducts();  // Re-render the products list using the updated cart
}
function updateQuantity(index, change) {
    const product = PRODUCTS[index];
    const existingProduct = cart.find(item => item.name === product.name);

    if(existingProduct) {
        //update the quantity
        const newQuantity = existingProduct.quantity + change;
        if(newQuantity > 0) {
            existingProduct.quantity = newQuantity;
        } else {
            cart = cart.filter(item => item.name !== product.name);
        }
    }
    setCartDetails(cart);
    displayProducts();  // Re-render the products list using the updated cart
}


function displayProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    PRODUCTS.forEach((product, productIndex) => {
        const existingProduct = cart.find(item => item.name === product.name);
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <div class="shop-items">
                <div class="box-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="box-content">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <p>${product.description}</p>
                     ${existingProduct ?
                    `<div class="Addcart-action">
                        <button class="cart-decrement" type="button" onclick="updateQuantity(${productIndex}, -1)">-</button>
                        <span>${existingProduct.quantity}</span>
                        <button class="cart-increment" type="button" onclick="updateQuantity(${productIndex}, 1)">+</button>
                    </div>` :
                    `<button class="Addcart" type="button" onclick="addcart(${productIndex})">Add to Cart</button>`
                    }
                </div>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
    console.log(productContainer.innerHTML)
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
