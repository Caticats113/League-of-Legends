const cards = document.getElementById('cards');

//Llamar a los usuarios que estan en el localStorage
let users = []
let savedUsers = localStorage.getItem("users");
    if (savedUsers !== null) {
        users = JSON.parse(savedUsers);
    };

//Creacion de la lista vacía de todas las tarjetas
let loadedlist = localStorage.getItem("cardsList");
let cardsList = [];

//Lista de info del api
let list = [];

let userId = "";
for(let i = 0; i < users.length; i++){
    if(users[i].isLogged == true){
        userId = i;
    }
}

console.log(userId);

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
        let usersFavs = [];
        for(let i=0; i<list.length; i++){
            let champId = list[i].id;
            let id = i;
            let name = list[i].name;
            let rol = list[i].tags[0];
            let img = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${list[i].id}_0.jpg`;
            let favorite = false;

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
        let favorite = users[userId].favs[i];
        let champId = cardsList[i].champId;

        let card = new Card(id, name, rol, img, favorite, champId);
        card.render(cards);
    }
}

//Al hacer click en el heart se cambia el estado del favorite a true o false y se guarda en el local storage
//y se vuelven a generar las cartas con los cambios
function addRemoveFavoriteList(i){
    if(users[userId].favs[i] === false){
        users[userId].favs[i] = true;

        let json = JSON.stringify(users);
        localStorage.setItem("users", json);
        generate();
    }

    else {
        users[userId].favs[i] = false;

        let json = JSON.stringify(users);
        localStorage.setItem("users", json);
        generate();
    }
}

function characterDetail(id){
    window.location.href = `./characterDetail.html?id=`+ id;
}

document.addEventListener('keyup', e =>{
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.card').forEach(card=>{
            card.textContent.toLowerCase().includes(e.target.value)
            ? card.classList.remove('filtro')
            : card.classList.add('filtro')
        })
    }
})













