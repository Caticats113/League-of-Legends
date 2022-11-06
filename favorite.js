const cards = document.getElementById("cards")


let loadedFavorite = localStorage.getItem("favoriteList");

if(loadedFavorite === null){
    let favoriteList = [];
} else{
    favoriteList = JSON.parse(loadedFavorite);
    show();
}


function show(){
    cards.innerHTML = "";
    for(let i=0; i<favoriteList.length; i++){
        let id = favoriteList[i].id;
        let name = favoriteList[i].name;
        let rol = favoriteList[i].rol;
        let img = favoriteList[i].img;
        let favorite = true;
        let card = new Card(id, name, rol, img, favorite);
        card.render(cards);
        document.getElementById("heart"+ id).classList.add("hide");
        document.getElementById("heart"+ id).classList.remove("heartCard");
        document.getElementById("heartFill"+ id).classList.remove("hide");
        document.getElementById("heartFill"+ id).classList.add("heartCard");

    }
}




