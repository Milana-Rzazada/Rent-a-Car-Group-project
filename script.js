// Authentication system
let currentUser = null;

// Check if user is logged in on page load
window.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
});

function checkAuthStatus() {
    currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        // User is logged in - show welcome message or redirect
        updateUIForLoggedInUser();
    }
}

function updateUIForLoggedInUser() {
    const user = JSON.parse(currentUser);
    // Update UI elements to show user is logged in
    const loginButtons = document.querySelectorAll('[onclick="toggleLogin()"]');
    loginButtons.forEach(btn => {
        btn.textContent = 'Profile';
        btn.onclick = () => showProfile();
    });
}

function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.classList.toggle('active');
}

function closeLogin() {
    document.getElementById('loginModal').classList.remove('active');
}

function toggleForm(event) {
    event.preventDefault();
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const modalTitle = document.getElementById('modalTitle');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        modalTitle.textContent = 'Login';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        modalTitle.textContent = 'Register';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if user exists (simulated)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Login successful
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        alert('Login successful! Welcome ' + username);
        closeLogin();
        updateUIForLoggedInUser();
    } else {
        alert('Invalid username or password');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Validation
    if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === username)) {
        alert('Username already exists');
        return;
    }
    
    // Register new user
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after registration
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    currentUser = newUser;
    alert('Registration successful! Welcome ' + username);
    closeLogin();
    updateUIForLoggedInUser();
}

function showProfile() {
    alert('Welcome ' + JSON.parse(currentUser).username);
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    alert('Logged out successfully');
    location.reload();
}

// Original functions
function search() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert('Searching for: ' + query);
    } else {
        alert('Please enter a search term.');
    }
}

function goToWishlist() {
    if (!currentUser) {
        alert('Please login to access wishlist');
        toggleLogin();
        return;
    }
    window.location.href = 'wishlist.html';
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

  