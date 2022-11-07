const EmailInput = document.getElementById('EmailInput');
const PasswordInput = document.getElementById('PasswordInput');
const logBtn = document.getElementById('logBtn');
const Storage = window.localStorage;

let currentUSer = localStorage.getItem("currentUser");
if(currentUSer !== null){window.location.href = "Main.html"};

function login(){
    let json = localStorage.getItem('users');
    if(json !== null){
        let users = JSON.parse(json);
        console.log(users);
        let email = EmailInput.value;
        let password = PasswordInput.value; 
        for(let i = 0; i < users.legth; i++){
            if(users[i].password === password){
                window.location.href = "Main.html"
                let currentUSer = JSON.stringify(user[i]);
                localStorage.setItem("currentUser", currentUSer)
                return;

            }else{
                alert('La contraseña es incorrecta')
                return;
            }

        };
    }
   
};
logBtn.addEventListener('click', login)