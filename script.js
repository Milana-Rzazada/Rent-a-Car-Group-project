 function search() {
      const query = document.getElementById('searchInput').value;
      if (query) {
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

  