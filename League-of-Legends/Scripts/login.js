const EmailInput = document.getElementById('EmailInput');
const PasswordInput = document.getElementById('PasswordInput');
const logBtn = document.getElementById('logBtn');
const Storage = window.localStorage;

let users = [];
let savedUsers = localStorage.getItem('users')
if (savedUsers !== null) {
    users = JSON.parse(savedUsers);
}
function login() {
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        if (EmailInput.value == users[i].email) {
            if (PasswordInput.value == users[i].password) {
                users[i].isLogged = true;
                let json = JSON.stringify(users);
                localStorage.setItem('users', json);
                flag = true;
                window.location.href = "Main.html";
            return
            }
        }
    } if (flag == false) {
        alert("Email o contraseña incorrectos")
    }

}
logBtn.addEventListener('click', login)