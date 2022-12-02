class Card{

    constructor(id, name, subname, splashart, champion, description, role, roleImg, difficulty, difficultyImg, p, q, w, e, r){
        this.id = id;
        this.name = name;
        this.subname = subname;
        this.splashart = splashart;
        this.champion = champion;
        this.description = description;
        this.role = role;
        this.roleImg = roleImg;
        this.difficulty = difficulty;
        this.difficultyImg = difficultyImg;
        this.p = p;
        this.q = q;
        this.w = w;
        this.e = e;
        this.r = r;
    }
    render(where) {
        let html = `
        <div id="HeadingName"><h1><b>${this.name}</b></h1></div>
        <div id="container">
        <div id="Cocontainer">
            <div id="tittle">
                <h3>${this.subname}</h3>
                <img id="Corasan" src="./ChInfo/Icono favoritos.png" alt="">
                <br>
                <div id="texto"><p>${this.description}</p>
                </div>
            </div>
            <div id="RoleDiff">
                <img class="fight" src="${this.roleImg}" alt="">
                <div class="letras">
                    <p class="white"><b>Role</b></p>
                    <p class="gold"><b>${this.role}</b></p>
                </div>
                <img class="fight" src="${this.difficultyImg}" alt="">
                <div class="letras">
                    <p class="white"><b>Difficulty</b></p>
                    <p class="gold"><b>${this.difficulty}</b></p>
                </div>
            </div>
            <div class="TextAbi">
                <h3>Abilities</h3>
            </div>
            <div id="Abilities">
                <span><img src="${this.p}" alt=""> <p>P</p></span>
                <span><img src="${this.q}" alt=""> <p>Q</p></span>
                <span><img src="${this.w}" alt=""> <p>W</p></span>
                <span><img src="${this.e}" alt=""> <p>E</p></span>
                <span><img src="${this.r}" alt=""> <p>R</p></span>
            </div>
            </div>
            <img id="atroz" src="${this.champion}" alt="">
        </div>
        <a href="./character.html"><img id="baka" src="./ChInfo/back.png" alt=""></a>`;

        where.innerHTML = html;

        body.style.backgroundImage = `url(${this.splashart})`;
    }

}