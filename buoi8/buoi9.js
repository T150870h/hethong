const form = document.querySelector('#loginForm');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
// const listUser = [
//   {
//     username: 'admin',
//     password: 'admin',
//   },
//   {
//     username: 'hung',
//     password: 'hung',
//   }
// ];
//    localStorage.setItem('listUser', JSON.stringify(listUser));  // localStorage.setItem('') dùng để lưu biến vào localStorage
     // JSON.stringify()   đổi code oj sang string
     // setItem gán vào localStorage
   form.addEventListener('submit', (e) => {
         e.preventDefault()
         const username = usernameInput.value;
         const password = passwordInput.value;
         const listUser = JSON.parse(localStorage.getItem('listUser'));
          // JSON.parse đổi từ string sang oj bình thường
          // getItem lấy ra localStorage
          const check = listUser.findIndex((item) => item.username == username && item.password == password)  
              // đk || một trong 2 điều kiện đúng thì sẽ đúng
              // đk && cả 2 đk đúng mới đúng
            if(check >= 0  ) {
              window.location.href = './buoi8.html';
            } else {
              alert('Nhập sai mật khẩu và tên đăng nhập')
            }
  })