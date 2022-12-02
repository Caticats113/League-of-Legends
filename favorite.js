const cards = document.getElementById("cards")

let users = []
let savedUsers = localStorage.getItem("users");
    if (savedUsers !== null) {
        userList = JSON.parse(savedUsers);
    };

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
        }
    }
}

function addRemoveFavoriteList(num){
    if(cardsList[num].favorite === true){
        cardsList[num].favorite = false;
        for(let i = 0; i < users.lengtht; i++){
            if(users[i].isLogged == true){
                users[i].favs = cardsList;
                let json = JSON.stringify(users);
                localStorage.setItem("users", json);
            }
        }
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        generate();
    }
}




