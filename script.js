// Mobile menu 
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Modal form
function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function toggleForm(e) {
  e.preventDefault();
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

// LocalStorage -user
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function setCurrentUser(username) {
  localStorage.setItem('currentUser', username);
}

function getCurrentUser() {
  return localStorage.getItem('currentUser');
}

function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}

// Login form submit
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  const users = getUsers();
  if (users[username] && users[username].password === password) {
    setCurrentUser(username);
    alert(`Welcome back, ${username}!`);
    toggleLogin();
    updateUIAfterLogin();
  } else {
    alert('Invalid username or password!');
  }
}

// Register form submit
function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const users = getUsers();
  if (users[username]) {
    alert('Username already exists!');
    return;
  }

  users[username] = { password };
  saveUsers(users);
  alert('Registration successful! You can now login.');
  toggleForm(new Event('click')); // toggle back to login form
}

//update login
function updateUIAfterLogin() {
  const username = getCurrentUser();
  if (username) {
    
    console.log(`User logged in: ${username}`);
   
    const modal = document.getElementById('loginModal');
    if(modal) modal.style.display = 'none';

   
    const iconsDiv = document.querySelector('.icons');
    if(iconsDiv) {
      if(!document.getElementById('welcomeUser')) {
        const span = document.createElement('span');
        span.id = 'welcomeUser';
        span.textContent = `Hello, ${username}`;
        span.style.marginLeft = '10px';
        span.style.color = 'white';
        iconsDiv.appendChild(span);
      }
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  updateUIAfterLogin();
});



//seArch
function search() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    if (!query) {
        alert('Please enter a search term.');
        return;
    }

   
    const cars = document.querySelectorAll('.popular_cars .one');

    cars.forEach(car => {
        const nameElement = car.querySelector('.name p');
        if (!nameElement) return; // Təhlükəsizlik üçün

        const name = nameElement.textContent.toLowerCase();

        if (name.includes(query)) {
            car.style.display = '';
        } else {
            car.style.display = 'none';
        }
    });
}

