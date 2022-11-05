const cards = document.getElementById('class');

let characters = [];
characters.push("Aatrox", "Ahri","Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bardo", "Bel'veth", "Blitzcrank")

let roles = [];
roles.push("Fighter", "Mage", "Assassin", "Marksman", "Tank", "Tank", "Mage", "Mage", "Marksman", "Marksman","Mage", "Mage", "Support", "Fighter", "Tank")
console.log(characters);

let cardsList = [];

function generate(){
    for(let i=0; i<characters.length; i++){
        let id = i+1;
        let name = characters[i];
        let rol = roles[i];
        const jpg = ".jpg";
        const folder = "./Img/";
        const page = ".html";
        let img = folder + id + jpg
        let link = characters[i] + page;
        let favorite = false;
        let card = new Card(id, name, rol, img, link, favorite);
        cardsList.push(card);


    }
}
generate();
console.log(cardsList);

