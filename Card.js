
class Card{
    constructor(id, name, rol, img, favorite){
        this.id = id;
        this.name = name;
        this.rol = rol;
        this.img = img;
        this.favorite = favorite;
    }

    render(container){
        let html = "";
        html += `<a href="${this.link}.html">
                    <img src="/Img/${this.img}.png" alt="" class="character" >
                </a>
                    <img class="heartCard" src="/Img/heartLine.png" onclick="addFavoriteList(${this.id})">
                    <p class="name">${this.name}</p>
                    <p class="rol">${this.rol}</p>`

        let card = document.createElement(`div`)
        card.classList.add("card")
        card.innerHTML = html;
        container.appendChild(card);

    }


}