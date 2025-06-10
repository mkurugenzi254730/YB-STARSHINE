
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - KES ${item.price}`;
    container.appendChild(div);
  });
}

function checkout() {
  alert("Order confirmed!");
  localStorage.removeItem("cart");
  location.href = "index.html";
}

displayCart();
