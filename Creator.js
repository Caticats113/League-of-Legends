class Creator{
    constructor(name, img, description){
        this.name = name;
        this.img= img;
        this.description = description;
    }
    render(){
        let html = ""
        html =`<img src="./ImagenesHome/image 63.png" alt="Integrante abierto" id="memojiGrande">
        <h3 id="textoNeiriña">Andrés Neira</h3>
        <p id="textoNeiriña">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facilis ab ullam, voluptate cupiditate ex veritatis natus vero, fuga ut optio adipisci enim distinctio iusto, architecto aperiam doloremque eum molestias cum officiis! Ipsam vitae odio amet ullam dolores officia minus quaerat ea cum, totam reiciendis, numquam excepturi eligendi aspernatur id!</p>`

        let creator = document.createElement(`div`)
        creator.classList.add("memojiMain")
        creator.innerHTML = html;
        container.appendChild(creator);
    }
}