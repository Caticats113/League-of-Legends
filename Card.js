
class Card{
    constructor(id, name, rol, img, favorite, champId){
        this.id = id;
        this.name = name;
        this.rol = rol;
        this.img = img;
        this.favorite = favorite;
        this.champId = champId;
    }

    render(container){
        let html = "";
        html += `<a onclick="characterDetail(${this.id})">
                        <img src="${this.img}" alt="" class="character">
                    </a>
                    <figure>
                        <div>
                            <p class="name">${this.name}</p>
                            <p class="rol">${this.rol}</p>
                        </div>
                            <img class="heartCard" id="heartFill${this.id}" src="./Img/heart${this.favorite}.png" onclick="addRemoveFavoriteList(${this.id})">
                    </figure>`

        let card = document.createElement(`div`)
        card.classList.add("card")
        card.setAttribute(`id`, `card${this.id}`)
        card.innerHTML = html;
        container.appendChild(card);
    }

}
