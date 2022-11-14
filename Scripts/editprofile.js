const newusernameInput = document.getElementById('newusernameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const saveBtn = document.getElementById('saveBtn')
const storage = window.localStorage;
const inputscont = document.getElementById('inputscont')
const imgBox = document.getElementById('imgBox')


let currentUSer = localStorage.getItem("currentUser");
if(currentUSer !== null){window.location.href = "Main.html"};

function perfil(container){
    let html = "";
    html = `
     <img src="./Img/profileimg.png" alt="profileimg" id="imgProfile">
    <img src="./Img/border.png" alt="profileborder" id="borderProfile">
    `
    container.innerHTML = html;

    
}
perfil(imgBox);


function applyChanges(i){
    let json = localStorage.getItem('users');
    if(json !== null){
        let users = JSON.parse(json);
        console.log(users);
} 
}



saveBtn.addEventListener('click', applyChanges)


