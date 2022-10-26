const profileImg = document.querySelector(".j-profile-img");
const profileName = document.querySelector(".j-profile-name");
const profileSurname = document.querySelector(".j-profile-surname");
const profileEmail = document.querySelector(".j-profile-email");
const profileLocation = document.querySelector(".j-profile-location");
const profileAge = document.querySelector(".j-profile-age");

const editButton = document.querySelector(".j-editing-button");

const editModal = document.querySelector(".j-modal-editing");
const editModalCloseButton = document.querySelector(".j-close-modal-editing");

function getUserData() {

  sendRequest({
    url: `/api/users/${localStorage.getItem('id')}`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error');
    })
    .then(userData => {
      const { name, surname, email, location, age, photoUrl } = userData.data;

      profileImg.style.backgroundImage = `url(${API_URL}${photoUrl})`
      profileName.innerText = name;
      profileSurname.innerText = surname;
      profileEmail.innerText = email;
      profileLocation.innerText = location;
      profileAge.innerText = age;
    })
    .catch(err => console.error(err));
}

function editData(event) {
  event.preventDefault();

  const userData = collectFormData(editModal, 'formData');

  sendRequest({
    url: `/api/users`,
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    },
    body: userData,
  })
    .then(response => {
      console.log(response)

      if (response.ok) {
        return response.json();
      }

      throw new Error('Error');
    })
    .then(() => {
      toggleModal(editModal);
      getUserData();
    })
    .catch(err => console.error(err));
}

getUserData();

editButton.addEventListener('click', () => {
  toggleModal(editModal);
})

editModal.addEventListener('submit', (event) => {
  editData(event);
})

editModalCloseButton.addEventListener('click', () => {
  toggleModal(editModal);
})