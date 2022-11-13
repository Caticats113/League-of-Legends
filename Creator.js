class Creator{
    constructor(name, img, description){
        this.name = name;
        this.img= img;
        this.description = description;
    }
    render(container){
        let html = "";
        html =`<div class="memojiMain">
                <img src="${this.img}" alt="Integrante abierto" id="memojiGrande">
                <h3 id="texto">${this.name}</h3>
                <p id="texto">${this.description}</p>
                </div>`

        container.innerHTML = html;
    }


}