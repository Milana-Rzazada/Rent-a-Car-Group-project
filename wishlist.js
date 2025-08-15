
const wishlistContainer = document.getElementById('wishlistContainer');
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Wishlist boşdursa mesaj göstər
if (wishlist.length === 0) {
  wishlistContainer.innerHTML = "<p>No cars in your wishlist.</p>";
} else {
  wishlist.forEach((car, index) => {
    const carDiv = document.createElement('div');
    carDiv.style.border = "1px solid #ccc";
    carDiv.style.padding = "10px";
    carDiv.style.width = "200px";
    carDiv.style.textAlign = "center";

    const img = document.createElement('img');
    img.src = car.image;
    img.alt = car.name;
    img.style.width = "100%";
    img.style.height = "auto";

    const name = document.createElement('p');
    name.textContent = car.name;
    name.style.fontWeight = "bold";

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginTop = "5px";
    removeBtn.onclick = () => {
      wishlist.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      location.reload(); // səhifəni yenilə
    };

    carDiv.appendChild(img);
    carDiv.appendChild(name);
    carDiv.appendChild(removeBtn);

    wishlistContainer.appendChild(carDiv);
  });
}
