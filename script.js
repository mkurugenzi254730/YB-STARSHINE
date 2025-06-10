
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = document.querySelector(`.product[data-id='${id}']`);
  const name = product.getAttribute("data-name");
  const price = parseInt(product.getAttribute("data-price"));
  cart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
