const cards = document.getElementById('cards');

//Lista de personajes
let characters = [];
characters.push("Aatrox", "Ahri","Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bardo", "Belveth", "Blitzcrank")

//Lista de los roles
let roles = [];
roles.push("Fighter", "Mage", "Assassin", "Marksman", "Tank", "Tank", "Mage", "Mage", "Marksman", "Marksman","Mage", "Mage", "Support", "Fighter", "Tank")
console.log(characters);


let subnames = ["DEATHBRINGER STANCE", "THE NINE-TAILED FOX", "THE ROGUE ASSASSIN", "THE ROGUE SENTINEL", "THE MINOTAUR", "THE SAD MUMMY", "THE CRYOPHOENIX", "THE DARK CHILD", "THE WEAPON OF THE FAITHFUL", "THE FROST ARCHER", "THE STAR FORGER", "THE EMPEROR OF THE SANDS", "THE WANDERING CARETAKER", "THE EMPRESS OF THE VOID", "THE GREAT STEAM GOLEM"];

let descriptions = ["Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.", "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.", "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.", `Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass."`, "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.", "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.", "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.", "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.", "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.", "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.","Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.", "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.", "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful spirit meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good... in his own odd way.", "A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void's old masters...", "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers."];

let difficulties = ["MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE", "MODERATE"];

//Creacion de la lista vacía de todas las tarjetas


let loadedlist = localStorage.getItem("cardsList");
let cardsList = [];
if(loadedlist === null){
    let cardsList = [];
    create();
} else{
    cardsList = JSON.parse(loadedlist);
    generate();
}


//Funcion que genera un mapa de cada tarjeta y la renderiza
function create(){
    for(let i=0; i<characters.length; i++){
        let id = i;
        let name = characters[i];
        let rol = roles[i];
        let img = i;
        let favorite = false;
        let subname = subnames[i];
        let description = descriptions[i];
        let difficulty = difficulties[i];

        let card = new Card(id, name, rol, img, favorite, subname, description, difficulty);
        cardsList.push(card);
        card.render(cards);
    }
}


function generate(){
    cards.innerHTML = "";
    for(let i=0; i<cardsList.length; i++){
        let id = cardsList[i].id;
        let name = cardsList[i].name;
        let rol = cardsList[i].rol;
        let img = cardsList[i].img;
        let favorite = cardsList[i].favorite;
        let subname = subnames[i];
        let description = descriptions[i];
        let difficulty = difficulties[i];

        let card = new Card(id, name, rol, img, favorite, subname, description, difficulty);
        card.render(cards);
        if(favorite === false){
            document.getElementById("heart"+ id).classList.remove("hide");
            document.getElementById("heart"+ id).classList.add("heartCard");
            document.getElementById("heartFill"+ id).classList.add("hide");
            document.getElementById("heartFill"+ id).classList.remove("heartCard");
        } else if(favorite === true){
            document.getElementById("heart"+ id).classList.add("hide");
            document.getElementById("heart"+ id).classList.remove("heartCard");
            document.getElementById("heartFill"+ id).classList.remove("hide");
            document.getElementById("heartFill"+ id).classList.add("heartCard");
        }
    }

}

console.log(cardsList);



//Al hacer click en el heart se cambia el estado del favorite a true o false y se guarda en el local storage
//y se vuelven a generar las cartas con los cambios
function addRemoveFavoriteList(num){
    if(cardsList[num].favorite === false){
        cardsList[num].favorite= true;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        generate();


    } else {
        cardsList[num].favorite = false;
        let json = JSON.stringify(cardsList);
        localStorage.setItem("cardsList", json);
        console.log(cardsList[num]);
        generate();

    }

}

function characterDetail(id){
    window.location.href = `./characterDetail.html?id=`+ id;
}