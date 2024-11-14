// shopping.js

let cart = {};

// Function to add items to the cart
function addToCart(itemName, price) {
  if (cart[itemName]) {
    cart[itemName].quantity += 1;
  } else {
    cart[itemName] = { price: price, quantity: 1 };
  }
  updateCart();
}

// Function to remove items from the cart
function removeFromCart(itemName) {
  if (cart[itemName]) {
    cart[itemName].quantity -= 1;
    if (cart[itemName].quantity <= 0) {
      delete cart[itemName];
    }
  }
  updateCart();
}

// Function to update the cart summary
function updateCart() {
  const cartSummary = document.getElementById("cart-summary");
  cartSummary.innerHTML = "";
  let subtotal = 0;
  let itemCount = 0;

  for (let item in cart) {
    const itemTotal = cart[item].price * cart[item].quantity;
    subtotal += itemTotal;
    itemCount += cart[item].quantity;

    cartSummary.innerHTML += `
      <p>
        ${item} (${cart[item].quantity}) - $${itemTotal.toFixed(2)}
  
        <button onclick="removeFromCart('${item}')">Remove</button>
        <br><br>
      </p>
    `;
  }

  cartSummary.innerHTML += `<p>Subtotal: $${subtotal.toFixed(2)}</p>`;
  cartSummary.innerHTML += `<p>Delivery: $10.00</p>`;
  cartSummary.innerHTML += `<p>Total: $${(subtotal + 10).toFixed(2)}</p>`;
}

// Function to calculate the total including delivery fee
function calculateTotal() {
  let subtotal = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);
  return subtotal + 10; // Adding fixed delivery fee
}


// Function



