import { mage,archer,guerrier,venom,father,dio } from "./instances.js";



// choix boss aleatoire
export function whatBoss() {
    let boss = [venom.nom,father.nom,dio.nom];
    let quelBoss =  boss[Math.floor(Math.random()*boss.length)];
    return quelBoss;
};


// creation nom des heros par le user
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

// affection mana pour le mage
export function mana(){
    let mana = [7,9,11];
    let pointMana = mana[Math.floor(Math.random()*3)];
    return pointMana;
};


// affectation fleche pour archer
export function fleche(){
    let flechette = [7,8,9,10,11];
    let nbFleche = flechette[Math.floor(Math.random()*flechette.length)];
    return nbFleche;
};



// affectation des point de vie et point d'attaque des heros
export function pointDeVie() {
    
};





