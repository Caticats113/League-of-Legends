const cards = document.getElementById("cards")
const menubar = document.getElementById('menubar')

let loadedlist = localStorage.getItem("cardsList");
if(loadedlist === null){
    let cardsList = [];
} else{
    cardsList = JSON.parse(loadedlist);
    generate();
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
        if(favorite === true){
            card.render(cards);
            document.getElementById("heart"+ id).classList.add("hide");
            document.getElementById("heart"+ id).classList.remove("heartCard");
            document.getElementById("heartFill"+ id).classList.remove("hide");
            document.getElementById("heartFill"+ id).classList.add("heartCard");
        } else if(favorite === false){

        }
    }
}

function addRemoveFavoriteList(num){
    if(cardsList[num].favorite === true){
        cardsList[num].favorite = false;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        console.log(cardsList[num]);
        generate();

    } else {

    }

}
//data mockup , a partir de este punto se realiza un data mockup ya que aun no se ha terminado el localStorage, maa que todo es para hacerse una idea de las variables. 
let img = "./Img/profileimg.png"; 
let username = "Anne_de_larregui";
let point = "10000pt";
let range = "granmaster II";

let barrita = new Barra(
    img, username, point, range
)
barrita.renderSidebar(menubar);



