const cards = document.getElementById('cards');
const menubar = document.getElementById('menubar')

//Creacion de la lista vacía de todas las tarjetas
let loadedlist = localStorage.getItem("cardsList");
let cardsList = [];
console.log(cardsList)

//Lista de info del api
let list = [];

async function getChamps(){
    let url = "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json";
    let response = await fetch(url);
    let data = await response.json();

    const info = data.data;
    for(const name in info){
        list.push(info[name]);
    }

    if(loadedlist === null){
        let cardsList = [];
        for(let i=0; i<list.length; i++){
            let champId = list[i].id;
            let id = i;
            let name = list[i].name;
            let rol = list[i].tags[0];
            let img = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${list[i].id}_0.jpg`;
            let favorite = false;
        console.log("hola");

            let card = new Card(id, name, rol, img, favorite, champId);
            cardsList.push(card);
            card.render(cards);
        }

        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        generate();
    } else{
        cardsList = JSON.parse(loadedlist);
        generate();
    }
}

getChamps();

//Funcion que genera un mapa de cada tarjeta y la renderiza
function generate(){
    cards.innerHTML = "";
    for(let i=0; i<cardsList.length; i++){
        let id = cardsList[i].id;
        let name = cardsList[i].name;
        let rol = cardsList[i].rol;
        let img = cardsList[i].img;
        let favorite = cardsList[i].favorite;
        let champId = cardsList[i].champId;

        let card = new Card(id, name, rol, img, favorite, champId);
        card.render(cards);
    }
}

//Al hacer click en el heart se cambia el estado del favorite a true o false y se guarda en el local storage
//y se vuelven a generar las cartas con los cambios
function addRemoveFavoriteList(num){
    if(cardsList[num].favorite === false){
        cardsList[num].favorite = true;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        generate();
    }

    else {
        cardsList[num].favorite = false;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        generate();
    }
}

function characterDetail(id){
    window.location.href = `./characterDetail.html?id=`+ id;
}

let imagennice = "./Img/profileimg.png";
let usernamenice = "Anne_de_larregui";
let pointnice = "10000pt";
let rangenice = "Granmaster II";

let barrita = new Barra(
    imagennice, usernamenice, pointnice, rangenice
)
barrita.renderSidebar(menubar)


document.addEventListener('keyup', e =>{
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.card').forEach(card=>{
            card.textContent.toLowerCase().includes(e.target.value)
            ? card.classList.remove('filtro')
            : card.classList.add('filtro')
        })
    }
})












