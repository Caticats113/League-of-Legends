class Card{
    constructor(id, name, rol, img, link, favorite){
        this.id = id;
        this.name = name;
        this.rol = rol;
        this.img = img;
        this.link = link;
        this.favorite = favorite;

    }

    render(container){
        let html = "";
        html += `<a href="${this.link}">
                    <img src="${this.img}" alt="" class="character">
                    <p class="name">${this.name}</p>
                    <p class="rol">${this.rol}</p>
                </a>`

        let card = document.createElement(`div`)
        card.classList.add("card")
        card.innerHTML = html;
        container.appendChild(card);
    }
}