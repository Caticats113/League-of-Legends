
class Card{
    constructor(id, name, rol, img, favorite, subname, description, difficulty){
        this.id = id;
        this.name = name;
        this.rol = rol;
        this.img = img;
        this.favorite = favorite;
        this.subname = subname;
        this.description = description;
        this.difficulty = difficulty;
    }

    render(container){
        let html = "";
        html += `<div id="card${this.id}">
                    <a onclick="characterDetail(${this.id})">
                        <img src="./Img/${this.img}.png" alt="" class="character" >
                    </a>
                    <img class="hide" id="heartFill${this.id}" src="./Img/heartFill.png" onclick="addRemoveFavoriteList(${this.id})">
                    <img class="heartCard" id="heart${this.id}" src="./Img/heartLine.png" onclick="addRemoveFavoriteList(${this.id})">
                    <p class="name">${this.name}</p>
                    <p class="rol">${this.rol}</p>
                </div>`

        let card = document.createElement(`div`)
        card.classList.add("card")
        card.innerHTML = html;
        container.appendChild(card);
    }

}
