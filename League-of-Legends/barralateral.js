class Barra {
    constructor(img, user, puntos, rango) {
        this.img = img;
        this.user = user;
        this.puntos = puntos;
        this.rango = rango;
    }
    renderSidebar(container) {
        console.log(this.rango)
        let html = "";
        html = `
        <div class="logos">
            <img src="./Img/logo.png" alt="" id="log1">
            <img src="./Img/logoLOL.webp" alt="" id="log2" >
        </div>
        <div class="profile">
            <img src="${this.img}" alt="profileimg" id="profileimg">
            <img src="./Img/border.png" alt="profileborder" id="profileborder">
        </div>
        <div class="textprofile">
            <p class="topacity" id="tprofile">Profile</p>
            <p id="username">${this.user}</p>
            <a href="./editprofile.html" id="usern">Edit profile</a>
        </div>



        <div class="boxpoints">
            <div class="yellow">
                <label class="tyellow" id="t1000" >${this.puntos}</label>
                <label class="tyellow" id="tgrand" >${this.rango}</label>

            </div>
            <div class="textsmall">
                <label class="topacity" >Points</label>
                <label class="topacity" >Range</label>
            </div>
        </div>

        <div class="menuboxes">
            <a href="./Main.html">
                <div  class="menubox" id="homebox">
                    <img alt="" src="./Img/home.png" id="homeicon" class="icons">
                    <p class="fws" id="fhome">Home</p>
                </div>
            </a>

            <a href="./favorite.html">
                <div class="menubox" id="heartbox">
                    <img alt="" src="./Img/heart.png" id="hearticon" class="icons">
                    <p class="fws" id="fheart">Favorites</p>
                </div>
            </a>
            <a href="./character.html">
                <div class="menubox" id="savebox">
                    <img alt="" src="./Img/Save.png" id="saveicon" class="icons">
                    <p class="fws" id="fsave">Champions</p>
                </div>
            </a>

                <div onclick="leave()" class="menubox" id="leavebox" >
                    <img alt="" src="./Img/leave.png" id="leaveicon"class="icons">
                    <p class="fws" id="fleave">Leave</p>
                </div>


        </div>`

        let barraLat = document.createElement(`div`)
        barraLat.innerHTML = html;
        console.log(barraLat)
        container.appendChild(barraLat);

    }
    leave(){
        for (let i = 0; i < users.length; i++) {
            if(users[i].isLogged == true){
                users[i].isLogged = false;
                let json = JSON.stringify(users);
                localStorage.setItem('users', json);
                window.location.href = `./index.html`;
            }
        }
    }
}