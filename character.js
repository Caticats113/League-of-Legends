const cards = document.getElementById('cards');
const menubar = document.getElementById('menubar')

//Lista de personajes
let characters = [];
characters.push("Aatrox", "Ahri","Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bardo", "Bel'veth", "Blitzcrank")

//Lista de los roles
let roles = [];
roles.push("Fighter", "Mage", "Assassin", "Marksman", "Tank", "Tank", "Mage", "Mage", "Marksman", "Marksman","Mage", "Mage", "Support", "Fighter", "Tank")
console.log(characters);

//Creacion de la lista vacía de todas las tarjetas


let loadedlist = localStorage.getItem("cardsList");
let cardsList = [];
if(loadedlist === null){
    let cardsList = [];
    create();
} else{
    cardsList = JSON.parse(loadedlist);
    generate();
}


//Funcion que genera un mapa de cada tarjeta y la renderiza
function create(){
    for(let i=0; i<characters.length; i++){
        let id = i;
        let name = characters[i];
        let rol = roles[i];
        let img = i;
        let favorite = false;
        let card = new Card(id, name, rol, img, favorite);
        cardsList.push(card);
        card.render(cards);
    }
}


function generate(){
    cards.innerHTML = "";
    for(let i=0; i<cardsList.length; i++){
        let id = cardsList[i].id;
        let name = cardsList[i].name;
        let rol = cardsList[i].rol;
        let img = cardsList[i].img;
        let favorite = cardsList[i].favorite;
        let card = new Card(id, name, rol, img, favorite);
        card.render(cards);
        if(favorite === false){
            document.getElementById("heart"+ id).classList.remove("hide");
            document.getElementById("heart"+ id).classList.add("heartCard");
            document.getElementById("heartFill"+ id).classList.add("hide");
            document.getElementById("heartFill"+ id).classList.remove("heartCard");
        } else if(favorite === true){
            document.getElementById("heart"+ id).classList.add("hide");
            document.getElementById("heart"+ id).classList.remove("heartCard");
            document.getElementById("heartFill"+ id).classList.remove("hide");
            document.getElementById("heartFill"+ id).classList.add("heartCard");
        }
    }

}

console.log(cardsList);



//Al hacer click en el heart se cambia el estado del favorite a true o false y se guarda en el local storage
//y se vuelven a generar las cartas con los cambios
function addRemoveFavoriteList(num){
    if(cardsList[num].favorite === false){
        cardsList[num].favorite= true;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        generate();


    } else {
        cardsList[num].favorite = false;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        console.log(cardsList[num]);
        generate();

    }

}


let imagennice = "./Img/profileimg.png";
let usernamenice = "Anne_de_larregui";
let pointnice = "10000pt";
let rangenice = "Granmaster II";

let barrita = new Barra(
    imagennice, usernamenice, pointnice, rangenice
)
barrita.renderSidebar(menubar)







