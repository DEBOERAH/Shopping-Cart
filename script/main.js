let mainElem = document.getElementById("main");
let cartElem = document.getElementById("cart");
let cartListElem = document.getElementById("cart-list");
let toplElem = document.getElementById("topleft");
let tRightElem = document.getElementById("tRight");
let buttElem = document.getElementById("butt");
let buttleftElem = document.getElementById("buttleft");
let buttrightElem = document.getElementById("buttright");
let cartleftElem = document.getElementById("cartleft");
let cartrightElem = document.getElementById("cartright");
let bcartElem = document.getElementById("bcart");

// Product data
const cartProducts = [
    {
        id: "1",
        productname: "Dell Laptop",
        price: 6000,
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/6363651/1.jpg?0570",
        productdescription: "DELL Latitude 3420-14 FHD-11th Gen Intel Core I5-1135G7 Quad-Core-16GB RAM-512GB SSD-Win 10 Pro"
    },
    {
        id: "2",
        productname: "Hp Laptop",
        price: 89000,
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5541121/1.jpg?0273",
        productdescription: "Hp EliteBook 840 G6 Intel Core I5 Touchscreen 16GB RAM/1TB SSD/Backlit Keyboard/FP Win 11 Pro"
    }
];

// Generate product display for the top section (first product)
toplElem.innerHTML = cartProducts.slice(0, 1).map(product => `
    <div class="product-item">
        <img src="${product.imgUrl}" alt="${product.productname}" class="product-image">
        <div class="product-details">
            <h3>${product.productname}</h3>
            <p>${product.productdescription}</p>
            <p>Price: $${product.price}</p>
        </div>
    </div>
`).join('');

// Price and controls for the first product in the right section
tRightElem.innerHTML = `
    <p><strong>$${cartProducts[0].price}</strong></p>
    <p><del>$65000</del></p>
    <p>50% off</p>
    <button class='butStyl'>-</button> 3 <button class='butStyl'>+</button>
`;

// Generate product display for the lower left section (second product)
buttleftElem.innerHTML = cartProducts.slice(1).map(product => `
    <div class="product-item">
        <img src="${product.imgUrl}" alt="${product.productname}" class="product-image">
        <div class="product-details">
            <h3>${product.productname}</h3>
            <p>${product.productdescription}</p>
            <p>Price: $${product.price}</p>
        </div>
    </div>
`).join('');

// Price and controls for the second product in the lower right section
buttrightElem.innerHTML = `
    <p><strong>$${cartProducts[1].price}</strong></p>
    <p><del>$65000</del></p>
    <p>50% off</p>
    <button class='butStyl'>-</button> 3 <button class='butStyl'>+</button>
`;

// Cart summary
cartleftElem.innerHTML = "<p>Subtotal</p><p>Delivery fee not concluded yet</p>";
cartrightElem.innerHTML = "<strong>$14000</strong>";
bcartElem.innerHTML = "<button id='butcart'>Checkout</button>";

