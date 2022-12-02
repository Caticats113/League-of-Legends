const menubar = document.getElementById('menubar')

let imagennice = "./Img/profileimg.png";
let usernamenice = "Anne_de_larregui";
let pointnice = "10000pt";
let rangenice = "Granmaster II";

if (localStorage.getItem('users') !== null) {
   
   let users = JSON.parse(localStorage.getItem('users'));
   //Esto muestra en username,points y rank en la barra lateral
for(let i = 0; i < users.length; i++){
    if(users[i].isLogged == true){
        usernamenice = users[i].name;
        pointnice = users[i].points;
        rangenice = users[i].rank;
    }
}
}


let barrita = new Barra(
    imagennice, usernamenice, pointnice, rangenice
)
barrita.renderSidebar(menubar)