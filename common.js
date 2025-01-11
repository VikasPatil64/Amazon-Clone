 const getCartDetails = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    return cart
}

 const setCartDetails = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

 const PRODUCTS = [
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

const Products = JSON.stringify(PRODUCTS)
console.log(Products)