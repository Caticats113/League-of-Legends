const cards = document.getElementById("cards")


let loadedFavorite = localStorage.getItem("favoriteList");

if(loadedFavorite === null){
    let favoriteList = [];
} else{
    favoriteList = JSON.parse(loadedFavorite);
    generate();
}


function generate(){
    for(let i=0; i<favoriteList.length; i++){
        let id = i+1;
        let name = favoriteList[i].name;
        let rol = favoriteList[i].rol;
        let img = id;
        let favorite = false;
        let card = new Card(id, name, rol, img, favorite);
        card.render(cards);
    }
}



