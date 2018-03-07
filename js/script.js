// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.


var products = [
  "Morgan & Co Lace Gown",
  "Bardot Solange Off the Shoulder Midi Dress",
  "Chelsea Off the Shoulder Dress",
  "Eliza Fit & Flare Dress",
  "Andrea Fit & Flare Dress",
  "Leith Ruched Bodycon Dress",
  "Gemma Halter Lace Sheath Dress",
  "Emery Midi Dress"
]

var cart = [];

// Add click handlers for each product
console.log('Adding click handlers...')

// Get each of the product updater elements (i.e. the -/+ icons) by class name.
var productUpdaters = document.getElementsByClassName("product-cart-adder");

// Iterate over each of the updaters, and add a click event handler to each.
for (var i = 0; i < productUpdaters.length; i++) {

  // Add a click event listener to the ith productUpdater.
  // On click the function 'updateCartOnClick' will be called.
  productUpdaters[i].addEventListener('click', updateCartOnClick);
}

// Find the product for the given updater element.
function findProduct(productUpdater) {
  // Grab the value of the 'data-product-id' attribute.
  return productUpdater.getAttribute('data-product-id')
}

// Click handler. Called on click.
// 'e' is the event.
function updateCartOnClick(e) {
  event.preventDefault();
  // Find the product being clicked and call updateCart
  updateCart(e.target);
}

// For a given product, update the cart.
function updateCart(productUpdater) {
  var product = findProduct(productUpdater);

  // Find the product in the cart if it exists.
  var i = cart.indexOf(product);

  if (i == -1) {
    // Push, append, the product to the cart increasing the length by 1.
    cart.push(product);
    changeImage(productUpdater, false);
    console.log('Added ' + product + ' to the cart.');
  } else {
    // Remove the element at index 'i' from the cart decreasing the length by 1.
    cart.splice(i, 1);
    changeImage(productUpdater, true);
    console.log('Removed ' + product + ' from the cart.');
  }
  // Log the new cart length (i.e. number of items in the cart) after adding or removing the product.
  console.log('Cart has ' + cart.length + ' item(s).');
}

//Swap button image between + or - on click
function changeImage(productUpdater, plus) {
  if (plus) {
    productUpdater.src = "images/plus.png";
    productUpdater.alt = "Add";
  } else {
    productUpdater.src = "images/minus.png";
    productUpdater.alt = "Remove";
  }
}

//Click function on Cart Link to console log number of items in cart 
function itemsInCart() {
  event.preventDefault();
  //  console.log('Cart has ' + cart.length + ' item(s).');
  console.log("You have " + cart.length + " items in the cart: [" + cart.join(", ") + ']')

}
