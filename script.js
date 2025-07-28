 function search() {
      const query = document.getElementById('searchInput').value;
      if(query) {
        alert('Searching for: ' + query);
      } else {
        alert('Please enter a search term.');
      }
    }

    function goToWishlist() {
      window.location.href = 'wishlist.html'; // Make sure this page exists
    }

    function toggleLogin() {
      const modal = document.getElementById('loginModal');
      modal.classList.toggle('active');
    }

    function closeLogin() {
      document.getElementById('loginModal').classList.remove('active');
    }

     function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('active');
    }

      const cars = [
      { name: "Koenigsegg", price: 99, img: "./images/car (1).png", capacity: 2 },
      { name: "CR - V", price: 80, img: "./images/Car1.png", capacity: 6 },
      { name: "MG ZX Excite", price: 74, img: "./images/car.png", capacity: 4 },
      { name: "Rolls-Royce", price: 96, img: "./images/Car (2).png", capacity: 2 },
      { name: "MG ZX Exclusive", price: 76, img: "./images/Car2.png", capacity: 4 },
      { name: "MG ZX Exclusive", price: 76, img: "./images/Car3.png", capacity: 4 },
      { name: "MG ZX Exclusive", price: 76, img: "./images/Car4.png", capacity: 4 },
      { name: "MG ZX Exclusive", price: 76, img: "./images/Car5.png", capacity: 4 },
      { name: "MG ZX Exclusive", price: 76, img: "./images/Car6.png", capacity: 4 },
       { name: "CR - V", price: 80, img: "./images/Car1.png", capacity: 6 },
        { name: "CR - V", price: 80, img: "./images/Car2.png", capacity: 6 },
    ];

    const carList = document.getElementById("carList");
    const maxPrice = document.getElementById("maxPrice");
    const priceVal = document.getElementById("priceVal");
    const capacitySelect = document.getElementById("capacitySelect");

    function renderCars() {
      const price = parseInt(maxPrice.value);
      const capacity = capacitySelect.value;
      carList.innerHTML = "";
      const filtered = cars.filter(car => {
        return (
          car.price <= price &&
          (capacity === "all" ||
            (capacity === "8" && car.capacity >= 8) ||
            car.capacity === parseInt(capacity))
        );
      });

      filtered.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
          <img src="${car.img}" alt="${car.name}" />
          <h4>${car.name}</h4>
          <p>Capacity: ${car.capacity} people</p>
          <p><strong>$${car.price.toFixed(2)}</strong> / day</p>
          <div class="heart">&#10084;</div>
          <button class="rent-btn">Rent Now</button>
        `;
        carList.appendChild(card);
      });
    }

    maxPrice.addEventListener("input", () => {
      priceVal.textContent = maxPrice.value;
      renderCars();
    });

    capacitySelect.addEventListener("change", renderCars);

    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("heart")) {
        e.target.classList.toggle("fav");
      }
    });

    renderCars();

      const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  priceRange.addEventListener("input", () => {
    priceValue.textContent = `$${parseFloat(priceRange.value).toFixed(2)}`;
    filterCars();
  });

  const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
  checkboxes.forEach(cb => cb.addEventListener("change", filterCars));

  function filterCars() {
    const selectedTypes = Array.from(document.querySelectorAll(".filter-category:nth-child(1) input:checked"))
                              .map(cb => cb.value);
    const selectedCapacities = Array.from(document.querySelectorAll(".filter-category:nth-child(2) input:checked"))
                                   .map(cb => cb.value);
    const maxPrice = parseFloat(priceRange.value);

    console.log("Filter applied:", {
      types: selectedTypes,
      capacities: selectedCapacities,
      maxPrice: maxPrice
    });

    // You can use this filter logic to filter car items on the page
  }