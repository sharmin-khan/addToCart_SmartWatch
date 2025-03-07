const ringButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    //  const color = event.target.id.split('-color')[0];

    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");

    productImage.src = "../images/" + color + ".png";
  });
}

const sizes = ["S", "M", "L", "XL"];
for (const size of sizes) {
  const btn = document.getElementById(`size-${size}`);

  btn.addEventListener("click", function () {
    for (const singleSize of sizes) {
      const button = document.getElementById(`size-${singleSize}`);
      console.log(button);

      button.classList.remove("border-purple-600");
    }
    btn.classList.add("border-purple-600");
  });
}

const quantityButtons = document.querySelectorAll(".quantity-button");
let quantity = 0;
for (const quantitybtn of quantityButtons) {
  quantitybtn.addEventListener("click", function (event) {
    if (event.target.innerText === "+") {
      quantity++;
    } else if (event.target.innerText === "-") {
      quantity--;
    }
    if (quantity < 0) {
      quantity = 0;
    }

    document.getElementById("quantity").innerText = quantity;
  });
}

let cartCount = 0;
document.getElementById("add-to-cart").addEventListener("click", function () {
  const cartQuantity = parseInt(document.getElementById("quantity").innerText);
  console.log(typeof cartQuantity);
  if (quantity > 0) {
    document.getElementById("checkout-container").classList.remove("hidden");

    cartCount = cartQuantity + cartCount;
    document.getElementById("cart-count").innerText = cartCount;
  }
});
