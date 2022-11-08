const detailPage = document.getElementById('detailPage');
const body = document.getElementById('body');

let id = 0;
let chName = ["AATROX", "AHRI", "AKALI", "AKSHAN", "ALISTAR"];
let subname = ["DEATHBRINGER STANCE", "THE NINE-TAILED FOX", ];
let splashart = ["./ChInfo/Aatroxfondo.jpg", "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltda668b66206f7f9e/60ee0b41cdb93c284ee3e936/Ahri_0.jpg"];
let champion = ["./ChInfo/Aatrox_Render.webp", "https://www.pngmart.com/files/21/Ahri-League-of-Legends-PNG-Isolated-HD.png"];
let description = ["Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance."];
let role = ["Fighter", "MAGE", ];
let roleImg = ["./ChInfo/Fighter.png"];
let difficulty = ["MODERATE", "MODERATE"];
let difficultyImg = ["./ChInfo/Difficult.png"];
let p = ["./ChInfo/Pasiva.png"];
let q = ["./ChInfo/Q.png"];
let w = ["./ChInfo/W.png"];
let e = ["./ChInfo/E}.png"];
let r = ["./ChInfo/R.png"];

    let card = new Card(id, chName[id], subname[id], splashart[id], champion[id], description[0], role[id], roleImg[0], difficulty[id], difficultyImg[0], p[0], q[0], w[0], e[0], r[0]);
    card.render(detailPage, body);
