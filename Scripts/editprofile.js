const newusernameInput = document.getElementById('newusernameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const saveBtn = document.getElementById('saveBtn')
const storage = window.localStorage;


let currentUSer = localStorage.getItem("currentUser");
if(currentUSer !== null){window.location.href = "Main.html"};

function applyChanges(i){
    let json = localStorage.getItem('users');
    if(json !== null){
        let users = JSON.parse(json);
        console.log(users);
}
    if(usernameInput !== ""){
        let user = usernameInput.value;
    }else{
        let user = users[i].user;
    }

    if(emailInput !== ""){
        
    }

    if(passwordInput !== ""){
        
    }
}



saveBtn.addEventListener('click', applyChanges)


