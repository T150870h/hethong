const form = document.querySelector('#id');
const usernameInput = form.querySelector('#username');
const passwordInput = form.querySelector('#password');
  form.addEventListener('submit', (e) => {
         e.preventDefault()
         const username = usernameInput.value;
         const password = passwordInput.value;
            if( username === 'admin' && password === 'admin' ) {
              window.location.href = './buoi8.html'
            };
  })