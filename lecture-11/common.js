const API_URL = 'https://academy.directlinedev.com';

function sendRequest({ url, method = 'GET', headers = null, body = null }) {
  const settings = {
    method,
    headers,
    body
  };

  return fetch(`${API_URL}${url}`, settings);
}

function collectFormData(form, type = 'json') {
  switch (type) {
    case 'json':
      const inputs = form.querySelectorAll('input');
      const body = {};

      for (let input of inputs) {
        body[input.name] = input.value;
      }
      return JSON.stringify(body);
      break;
    case 'formData':
      console.log(form)
      return new FormData(form.querySelector('form'));
      break;
    default:
      throw new Error('collectFormData f: Wrong data type.')
  }


}

function updateToken() {
  const token = localStorage.getItem('token');

  if (!token) return;

  profileButton.classList.toggle('hidden');
  registerButton.classList.toggle('hidden');
  loginButton.classList.toggle('hidden');
}

function toggleModal(modal) {
  modal.classList.toggle('hidden')
}