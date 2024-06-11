var myName = "John Doe";
var dob = "01/01/2000";
//variable to store a message 
var message = "Hello, my name is " + myName + " and I was born on " + dob;
//create n array to store 3 product items 
var product = [
    {
        name: "Apple",
        price: 2.99
    },
    {
        name: "Banana",
        price: 1.99
    },
    {
        name: "Orange",
        price: 3.99
    }
];
//a reusable type that can be used to create multiple products
var product1 = {
    name: "Apple",
    price: 2.99,
    description: "A red apple",
    status: true,
    image: "apple.jpg",
    types: ["Fuji", "Gala", "Granny Smith"]
};
var product2 = {
    name: "Banana",
    price: 1.99,
    description: "A yellow banana",
    status: true,
    image: "banana.jpg",
    types: ["Cavendish", "Lady Finger"]
};
function greet(name) {
    return "Hello, ".concat(name);
}
var add = function (a, b) {
    return a + b;
};
