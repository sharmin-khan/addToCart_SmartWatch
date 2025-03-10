const ringButtons = document.querySelectorAll(".ring-button");
let images = "../images/";

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
      // console.log(button);

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
let productCart = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
  const cartQuantity = parseInt(document.getElementById("quantity").innerText);
  // console.log(typeof cartQuantity);
  if (quantity > 0) {
    document.getElementById("checkout-container").classList.remove("hidden");

    cartCount = cartQuantity + cartCount;
    document.getElementById("cart-count").innerText = cartCount;

    const selectedColorBtn = document.querySelector(
      "button.border-purple-600.w-6"
    );
    // console.log(selectedColorBtn);
    // const selectColor = selectedColorBtn.id.split('-color')[0] or
    const selectColor = selectedColorBtn
      ? selectedColorBtn.id.split("-color")[0]
      : "N";
    // console.log(selectColor);

    const selectSize = document
      .querySelector("button.border-purple-600:not(.w-6")
      .innerText.split(" ")
      .at(0);
    //  console.log(selectSize);

    const price = document
      .querySelector("button.border-purple-600:not(.w-6")
      .innerText.split(" ")[1]
      .split("$")[1];
    // console.log(typeof price);
    productCart.push({
      image: `${selectColor}.png`,
      title: "Smart Watch",
      color: selectColor,
      size: selectSize,
      quantity: cartQuantity,
      price: cartQuantity * parseInt(price),
    });
    console.log(productCart);
  } else {
    alert("Please Select Quantity");
  }
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  const cartModal = document.getElementById("cart-modal");
  const cartItems = document.getElementById("cart-items");

  for (let item of productCart) {
    let tr = document.createElement("tr");
    tr.classList.add("border-b");
    tr.innerHTML = `
     <td class="py-2 px-4"><div class="flex items-center space-x-2">
      <img class="h-16 w-16 object-cover" src="${images}${item.image}" alt="">
      <span>${item.title}</span>
     </div></td>
     <td class="py-2 px-4">${item.color}</td>
     <td class="py-2 px-4">${item.size}</td>
     <td class="py-2 px-4">${item.quantity}</td>
     <td class="py-2 px-4">$${item.price}</td>
     `;
    cartItems.appendChild(tr);
  }
  cartModal.classList.remove("hidden");
});
document
  .getElementById("continue-shopping")
  .addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
  });
