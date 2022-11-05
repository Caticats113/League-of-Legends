const cards = document.getElementById('cards');


let characters = [];
characters.push("Aatrox", "Ahri","Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bardo", "Bel'veth", "Blitzcrank")

let roles = [];
roles.push("Fighter", "Mage", "Assassin", "Marksman", "Tank", "Tank", "Mage", "Mage", "Marksman", "Marksman","Mage", "Mage", "Support", "Fighter", "Tank")
console.log(characters);


let cardsList = [];

function generate(){
    for(let i=0; i<characters.length; i++){
        let id = i+1;
        let name = characters[i];
        let rol = roles[i];
        let img = id;
        let favorite = false;
        let card = new Card(id, name, rol, img, favorite);
        cardsList.push(card);
        card.render(cards);
    }
}
generate();

console.log(cardsList);


let loadedFavorite = localStorage.getItem("favoriteList");
if(loadedFavorite === null){
    let favoriteList = [];
} else{
    favoriteList = JSON.parse(loadedFavorite);
}

function addFavoriteList(id){
    favoriteList.push(cardsList[id-1]);
    let json = JSON.stringify(favoriteList);
    localStorage.setItem("favoriteList", json);
    console.log(favoriteList);
}






