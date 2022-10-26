const registerButton = document.querySelector('.j-register-button');
const loginButton = document.querySelector('.j-login-button');
const profileButton = document.querySelector('.j-profile-button');


// Modals
const registerModal = document.querySelector(".j-modal-register");
const loginModal = document.querySelector(".j-modal-login");

// Modals close buttons
const registerModalCloseButton = document.querySelector(".j-close-modal-register");
const loginModalCloseButton = document.querySelector(".j-close-modal-login");

function registerUser(event) {
  event.preventDefault();

  const userData = collectFormData(registerModal);

  sendRequest({
    url: '/api/users',
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: userData,
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      console.log(response);

      throw Error(`Register status is ${response.status}`);
    })
    .then(userData => {
      const { name, surname } = userData.data;

      alert(`User is registered with credentials: ${name} ${surname}`)

      toggleModal(registerModal);
      toggleModal(loginModal);
    })
    .catch(err => console.error(`registerUser function: ${err}`));
}

function loginUser(event) {
  event.preventDefault();

  const userData = collectFormData(loginModal);

  sendRequest({
    url: '/api/users/login',
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: userData,
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      console.log(response);

      throw Error(`Login status is ${response.status}`);
    })
    .then(userData => {
      const { userId, token } = userData.data;

      localStorage.setItem('id', userId);
      localStorage.setItem('token', token);

      updateToken();

      toggleModal(loginModal);

      location.href = 'profile/profile.html';
    })
    .catch(err => console.error(`registerUser function: ${err}`));
}

registerButton.addEventListener('click', () => {
  toggleModal(registerModal);
})

loginButton.addEventListener('click', () => {
  toggleModal(loginModal);
})

registerModalCloseButton.addEventListener('click', () => {
  toggleModal(registerModal);
})

registerModal.addEventListener('submit', (event) => {
  registerUser(event);
});

loginModal.addEventListener('submit', (event) => {
  loginUser(event);
});



