class CardDet{
    constructor(id, name, subname, rol, splashart, favorite, champId, difficulty, blurb, p, q, w, e, r){
        this.id = id;
        this.name = name;
        this.subname = subname;
        this.rol = rol;
        this.splashart = splashart;
        this.favorite = favorite;
        this.champId = champId;
        this.difficulty = difficulty;
        this.blurb = blurb;
        this.p = p;
        this.q = q;
        this.w = w;
        this.e = e;
        this.r = r;
    }

    createPage(){
        const detailPage = document.getElementById('asdghjk');
        const body = document.getElementById('body');

        let html = `
        <div id="HeadingName"><h1><b>${this.name}</b></h1></div>
        <div id="container">
        <div id="Cocontainer">
            <div id="tittle">
                <h3>${this.subname}</h3>
                <img id="Corasan" src="./Img/heart${this.favorite}.png" alt="">
                <br>
                <div id="texto"><p>${this.blurb}</p>
                </div>
            </div>
                <div id="RoleDiff">
            <span>
                    <img class="fight" src="./ChInfo/${this.rol[0]}.webp" alt="">
                    <div class="letras">
                        <p class="white"><b>Role</b></p>
                        <p class="gold"><b>${this.rol}</b></p>
                    </div>
            </span><span>
                    <div class="letras">
                        <p class="white"><b>Difficulty</b></p>
                        <p class="gold"><b>${this.difficulty}</b></p>
                    </div>
            </span>
                </div>
            <div class="TextAbi">
                <h3>Abilities</h3>
            </div>
            <div id="Abilities">
                <span><img src="http://ddragon.leagueoflegends.com/cdn/12.22.1/img/passive/${this.p}" alt=""> <p>P</p></span>
                <span><img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${this.q}" alt=""> <p>Q</p></span>
                <span><img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${this.w}" alt=""> <p>W</p></span>
                <span><img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${this.e}" alt=""> <p>E</p></span>
                <span><img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${this.r}" alt=""> <p>R</p></span>
            </div>
        <a href="./character.html"><img id="baka" src="./ChInfo/back.png" alt=""></a>`;

        detailPage.innerHTML = html;

        body.style.backgroundImage = `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champId}_0.jpg)`;
}

}