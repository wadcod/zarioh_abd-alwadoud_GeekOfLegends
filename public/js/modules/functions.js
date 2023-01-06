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
    let pointMax =1000;
    let pvMage;
    let pvArcher;
    let pvGuerrier;
    let sommePv;
    let restePoint =1000;
    alert(`Vous avez a votre disposition 1000 points de vie a partager entre vos 3 heros `)


    do {
        pvMage = parseInt(prompt(`entrez les points de vie pour ${mage.nom} `));
        mage.pointVie = pvMage;
        restePoint -= pvMage;

        pvArcher = parseInt(prompt(`entrez les points de vie pour ${archer.nom} `));
        archer.pointVie = pvArcher;
        restePoint -= pvArcher;

        pvGuerrier = parseInt(prompt(`entrez les points de vie pour ${guerrier.nom} `));
        guerrier.pointVie = pvGuerrier;
        restePoint -= pvGuerrier;
        
        if (sommePv>pointMax) {
            alert(`vous avez entrez ${sommePv} cela depasse la reserve que je vous ai donner, il faut reccommencer la repartition`);
        }if (sommePv == pointMax) {
            alert(`vous avez entrez ${sommePv} sur les ${pointMax} que je vous ai donner on peux passer a vos point de combat`);
        }if (sommePv < pointMax) {
            alert(`vous avez entrez ${sommePv} sur les ${pointMax} que je vous ai donner, il vous en reste ${restePoint} a distribuer, recommencer`);
        };


    } while (sommePv != pointMax);




};





