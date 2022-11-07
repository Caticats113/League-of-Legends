const detailPage = document.getElementById('detailPage');
const body = document.getElementById('body');

let id = 1;
let chName = "AATROX";
let subname = "DEATHBRINGER STANCE";
let splashart = "./ChInfo/Aatroxfondo.jpg";
let champion = "./ChInfo/Aatrox_Render.webp";
let description = "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.";
let role = "Fighter";
let roleImg = "./ChInfo/Fighter.png";
let difficulty = 2;
let difficultyImg = "./ChInfo/Difficult.png";
let p = "./ChInfo/Pasiva.png";
let q = "./ChInfo/Q.png";
let w = "./ChInfo/W.png";
let e = "./ChInfo/E}.png";
let r = "./ChInfo/R.png";

let card = new Card(id, chName, subname, splashart, champion, description, role, roleImg, difficulty, difficultyImg, p, q, w, e, r);

card.render(detailPage, body);