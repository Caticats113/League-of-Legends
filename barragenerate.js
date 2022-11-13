const menubar = document.getElementById('menubar')

let imagennice = "./Img/profileimg.png";
let usernamenice = "Anne_de_larregui";
let pointnice = "10000pt";
let rangenice = "Granmaster II";

let barrita = new Barra(
    imagennice, usernamenice, pointnice, rangenice
)
barrita.renderSidebar(menubar)