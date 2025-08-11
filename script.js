function search() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const cars = document.querySelectorAll('.popular_cars .one');

    if (!query) {
        alert('Please enter a search term.');
        return;
    }

    cars.forEach(car => {
        const name = car.querySelector('.name p').textContent.toLowerCase();
        if (name.includes(query)) {
            car.style.display = '';
        } else {
            car.style.display = 'none';
        }
    });
}
