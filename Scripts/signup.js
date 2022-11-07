const UserInput = document.getElementById('UserInput');
const BirthdayInput = document.getElementById('BirthdayInput');
const EmailInput = document.getElementById('EmailInput');
const PasswordInput = document.getElementById('PasswordInput');
const createBtn = document.getElementById('createBtn')
const Storage = window.localStorage;

let users = [];
let savedUsers = localStorage.getItem('users') 
if(savedUsers !== null){
    users = JSON.parse(savedUsers);
}


function signup(){

    if(PasswordInput.value.length <= 5){
        alert('Las contraseñas deben de tener minimo 6 caracteres')
        return;
    }
    let user = new UserC(
        UserInput.value,
        BirthdayInput.value,
        EmailInput.value,
        PasswordInput.value
    );
    users.push(user);
    let json = JSON.stringify(users);
    localStorage.setItem('users', json);
    window.location.href = "login.html";
}



createBtn.addEventListener('click', signup)
