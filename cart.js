const products = [
    {
        name: "Skincare Essentials",
        image: "box1_image.jpg",
        price: 29.99,
        description: "Description for Product 1"
    },
    {
        name: "Haircare Products",
        image: "box2_image.jpg",
        price: 39.99,
        description: "Description for Product 2"
    },
    {
        name: "Personal Hygiene",
        image: "box3_image.jpg",
        price: 49.99,
        description: "Description for Product 3"
    },
    {
        name: "Fitness & Wellness",
        image: "box4_image.jpg",
        price: 59.99,
        description: "Description for Product 4"
    },
    {
        name: "Beauty Products",
        image: "box5_image.jpg",
        price: 69.99,
        description: "Description for Product 5"
    },
    {
        name: "Health Supplements",
        image: "box6_image.jpg",
        price: 79.99,
        description: "Description for Product 6"
    },
    {
        name: "Organic Products",
        image: "box7_image.jpg",
        price: 89.99,
        description: "Description for Product 7"
    },
    {
        name: "Healthy Lifestyle",
        image: "box8_image.jpg",
        price: 99.99,
        description: "Description for Product 8"
    }
];

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function addcart(index) {
    const product = products[index];
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
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    displayProducts();  // Re-render the products list using the updated cart
}
function updateQuantity(index, change) {
    const product = products[index];
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
    localStorage.setItem('cart', JSON.stringify(cart));
    displayProducts();  // Re-render the products list using the updated cart
}


function displayProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach((product, productIndex) => {
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
                    `<div class="cart-action">
                        <button class="cart-decrement" type="button" onclick="updateQuantity(${productIndex}, -1)">-</button>
                        <span>${existingProduct.quantity}</span>
                        <button class="cart-increment" type="button" onclick="updateQuantity(${productIndex}, 1)">+</button>
                    </div>` :
                    `<button class="cart" type="button" onclick="addcart(${productIndex})">Add to Cart</button>`
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
