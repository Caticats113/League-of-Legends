    let loadedlist = localStorage.getItem("cardsList");
    let cardsList = [];
    cardsList = JSON.parse(loadedlist);
    console.log(cardsList)

    let list = [];
    let champId = "";
    let id = "";
    let favorite = "";

function getId(){
    let params = new URLSearchParams(window.location.search);
    id = params.get('id');
    console.log(id)

    champId = cardsList[id].champId;
    favorite = cardsList[id].favorite;
}
async function getChampsDet(champId){
    let url = `http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${champId}.json`;
    let response = await fetch(url);
    let data = await response.json();
console.log(champId)

    const dets = data.data;
    for(const name in dets){
        list.push(dets[name]);
    }
    console.log(list);

    let name = list[0].name;
    let subname = list[0].title;
    let rol = list[0].tags;
    let splashart = list[0].image.full;
    let difficulty = list[0].info.difficulty;
    let blurb = list[0].lore;
    let p = list[0].passive.image.full;
    let q = list[0].spells[0].image.full;
    let w = list[0].spells[1].image.full;
    let e = list[0].spells[2].image.full;
    let r = list[0].spells[3].image.full;

    let detChamp = new CardDet(id, name, subname, rol, splashart, favorite, champId, difficulty, blurb, p, q, w, e, r);
    detChamp.createPage();
}
getId();
getChampsDet(champId);
