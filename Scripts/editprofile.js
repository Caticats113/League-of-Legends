const newusernameInput = document.getElementById('newusernameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const saveBtn = document.getElementById('saveBtn')
const storage = window.localStorage;
const inputscont = document.getElementById('inputscont')
const imgBox = document.getElementById('imgBox')

let users = [];
let savedUsers = localStorage.getItem('users')
if (savedUsers !== null) {
    users = JSON.parse(savedUsers);
}

function perfil(container) {
    let html = "";
    html = `
     <img src="./Img/profileimg.png" alt="profileimg" id="imgProfile">
    <img src="./Img/border.png" alt="profileborder" id="borderProfile">
    `
    container.innerHTML = html;
}
perfil(imgBox);

function userInfo(){
    for (let i = 0; i < users.length; i++) {
        if (users[i].isLogged == true) {
            newusernameInput.value = users[i].name;
            emailInput.value = users[i].email;
            passwordInput.value = users[i]
        }
    }
}
userInfo()


function applyChanges() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        if (users[i].isLogged == true) {
           console.log(users[i],"Entrada")
            users[i].name = newusernameInput.value;
            users[i].email = emailInput.value;
            users[i].password = passwordInput.value;
            let json = JSON.stringify(users);
            localStorage.setItem('users', json);
            console.log(users[i],"Salida")
        }

    }
}

function leave(){
    for (let i = 0; i < users.length; i++) {
       if(users[i].isLogged == true){
        users[i].isLogged = false;
        let json = JSON.stringify(users);
        localStorage.setItem('users', json);
        window.location.href = "./index.html";
    }
    }
}






saveBtn.addEventListener('click', applyChanges)


