import { mage,archer,guerrier } from "./instances.js";

export function nomHeros(leType) {
    if (leType == `mage`) {
        let nom = prompt(`entrez le nom de votre heros`)
        mage.nom = nom;
    }if (leType == `archer`) {
        let nom = prompt(`entrez le nom de votre heros`)
        archer.nom = nom;
    }if (leType == `guerrier`) {
        let nom = prompt(`entrez le nom de votre heros`)
        guerrier.nom = nom;
    };
};


export function mana(){
    let mana = [7,9,11];
    let pointMana = mana[Math.floor(Math.random()*3)];
    return pointMana;
};

export function fleche(){
    let flechette = [7,8,9,10,11];
    let nbFleche = flechette[Math.floor(Math.random()*flechette.length)];
    return nbFleche;
};





