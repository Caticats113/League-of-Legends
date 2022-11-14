function createPage(detChamp) {
    const detailPage = document.getElementById('asdghjk');
    const body = document.getElementById('body');

    let html = `
    <div id="HeadingName"><h1><b>${detChamp.name}</b></h1></div>
    <div id="container">
    <div id="Cocontainer">
        <div id="tittle">
            <h3>${detChamp.subname}</h3>
            <img id="Corasan" src="./ChInfo/Icono favoritos.png" alt="">
            <br>
            <div id="texto"><p>${detChamp.description}</p>
            </div>
        </div>
        <div id="RoleDiff">
            <img class="fight" src="./ChInfo/${detChamp.rol}.webp" alt="">
            <div class="letras">
                <p class="white"><b>Role</b></p>
                <p class="gold"><b>${detChamp.rol}</b></p>
            </div>
            <img class="fight" src="./ChInfo/Difficult${detChamp.difficulty}.png" alt="">
            <div class="letras">
                <p class="white"><b>Difficulty</b></p>
                <p class="gold"><b>${detChamp.difficulty}</b></p>
            </div>
        </div>
        <div class="TextAbi">
            <h3>Abilities</h3>
        </div>
        <div id="Abilities">
            <span><img src="./ChInfo/${detChamp.name}P.png" alt=""> <p>P</p></span>
            <span><img src="./ChInfo/${detChamp.name}Q.png" alt=""> <p>Q</p></span>
            <span><img src="./ChInfo/${detChamp.name}W.png" alt=""> <p>W</p></span>
            <span><img src="./ChInfo/${detChamp.name}E.png" alt=""> <p>E</p></span>
            <span><img src="./ChInfo/${detChamp.name}R.png" alt=""> <p>R</p></span>
        </div>
    <a href="./character.html"><img id="baka" src="./ChInfo/back.png" alt=""></a>`;

    detailPage.innerHTML = html;

    body.style.backgroundImage = `url(./ChInfo/${detChamp.name}.jpg)`;
}


    let loadedlist = localStorage.getItem("cardsList");
    let cardsList = [];
    cardsList = JSON.parse(loadedlist);
    console.log(cardsList)

function getId(){
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    console.log(id)

    var i = id;
    let name = cardsList[i].name;
    let rol = cardsList[i].rol;
    let img = cardsList[i].img;
    let favorite = cardsList[i].favorite;
    let subname = cardsList[i].subname;
    let description = cardsList[i].description;
    let difficulty = cardsList[i].difficulty;

    let detChamp = new Card(id, name, rol, img, favorite, subname, description, difficulty);
    createPage(detChamp);

}

getId();
