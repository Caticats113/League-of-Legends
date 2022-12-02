const creators = document.getElementById('creators')
const iconos = document.getElementById('iconos')

let names = ["Anne Solarte", "Andrés Neira", "Catalina Tello"]
let images =["./ImagenesHome/Marquito.png", "./ImagenesHome/Marquito (1).png", "./ImagenesHome/Marquito (2).png"]

let descriptions =["Estudiante de tercer semestre de Diseño de Medios Interactivos. Fan de las empanadas con ají y doritos Flamin Hot con limón.", "Estudiante de tercer semestre de Diseño de Medios Interactivos. Fan de One Piece, Dota y el css", "Estudiante de tercer semestre de Diseño de Medios Interactivos con simultaneidad en Química. Fan de la tabla periodica y el carbono 14."]
let people = [];
function createList(){
    for(let i = 0; i<names.length; i++){
        let name = names[i];
        let img = images[i];
        let description = descriptions[i];
        let person = new Creator(name, img, description);
        people.push(person)
    }
    console.log(people)
    renderIcon(iconos);
}
createList()

function renderIcon(container){
    let html = "";
    html = `<img src="${images[0]} " alt="Memoji de Anne" onclick="create(${0})"class="memoji2" id="icon0">
            <img src="${images[1]}" alt="Memoji de Neira" onclick="create(${1})" class="memoji2" id="icon1">
            <img src="${images[2]}" alt="Memoji de Cata" onclick="create(${2})" class="memoji2" id="icon2">`

    let icons = document.createElement(`div`)
    icons.classList.add("memojiMain")
    icons.innerHTML = html;
    container.appendChild(icons);

}

function create(pos){
    let name = names[pos];
    let img = images[pos];
    let description = descriptions[pos];
    let human = new Creator(name, img, description);
    human.render(creators)

}

