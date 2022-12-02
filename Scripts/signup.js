const UserInput = document.getElementById('UserInput');
const BirthdayInput = document.getElementById('BirthdayInput');
const EmailInput = document.getElementById('EmailInput');
const PasswordInput = document.getElementById('PasswordInput');
const createBtn = document.getElementById('createBtn')
const Storage = window.localStorage;

let users = [];
let savedUsers = localStorage.getItem('users')
if (savedUsers !== null) {
    users = JSON.parse(savedUsers);
}


function signup() {

    if (PasswordInput.value.length <= 5) {
        alert('Las contraseñas deben de tener minimo 6 caracteres')
        return;
    }
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        if (EmailInput.value == users[i].email) {
            flag = true;
            alert("este correo ya esta en uso");
        }
    }
    if (flag == false) {
        let points = Math.floor(Math.random() * 100)
        Ranks = ["Iron IV", "Iron III", "Iron II", "Iron I", "Bronze IV", "Bronze III", "Bronze II", "Bronze I", "Silver IV", "Silver III", "Silver II", "Silver I", "Gold IV", "Gold III", "Gold II", "Gold I", "Platinum IV", "Platinum III", "Platinum II", "Platinum I", "Diamond IV", "Diamond III", "Diamond II", "Diamond I", "Master", "Grandmaster", "Challenger"]
        let rank = Ranks[Math.floor(Math.random() * 27)]
        let user = new UserC(
            UserInput.value,
            BirthdayInput.value,
            EmailInput.value,
            PasswordInput.value,
            users.length,
            false,
            [],
            points,
            rank
        );
        users.push(user);
        let json = JSON.stringify(users);
        localStorage.setItem('users', json);
        window.location.href = "login.html";
    }

}



createBtn.addEventListener('click', signup)
