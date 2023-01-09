import {
    mage,
    archer,
    guerrier,
    venom,
    father,
    dio
} from "./instances.js";



// choix boss aleatoire
export function whatBoss() {
    let boss = [venom.nom, father.nom, dio.nom];
    let quelBoss = boss[Math.floor(Math.random() * boss.length)];
    return quelBoss;
};

// function enigme boss en dessous des 20% hp pose lenigme au hazard et return un bolleen
export function enigmeBoss() {
    let rep;
    let finalRep;
    let question = Math.floor(Math.random() * 3) + 1;
    switch (question) {
        // enigme1
        case 1:
            for (let i = 0; i < 3; i++) {
                rep = prompt(`Que fait retourne Math.floor(1.3 * 10) ?`);
                if (rep == 13) {
                    finalRep = true;
                    break;
                } else {
                    finalRep = false;
                };
            };
            break;
            // enigme2
        case 2:
            for (let i = 0; i < 3; i++) {
                rep = prompt(`Quel est l'indice du premier "i" de cette question ?`);
                if (rep == 11) {
                    finalRep = true;
                    break;
                } else {
                    finalRep = false;
                };
            };
            break;
            // enigme3
        case 3:
            for (let i = 0; i < 3; i++) {
                rep = prompt(`Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?`);
                if (rep == `silence`) {
                    finalRep = true;
                    break;
                } else {
                    finalRep = false;
                };
            };
            break;
        default:
            break;
    };
    return finalRep;
};




// creation nom des heros par le user
export function nomHeros(leType) {
    if (leType == `mage`) {
        let nom = prompt(`entrez le nom de votre heros`)
        mage.nom = nom;
    }
    if (leType == `archer`) {
        let nom = prompt(`entrez le nom de votre heros`)
        archer.nom = nom;
    }
    if (leType == `guerrier`) {
        let nom = prompt(`entrez le nom de votre heros`)
        guerrier.nom = nom;
    };
};

// affection mana pour le mage
export function mana() {
    let mana = [7, 9, 11];
    let pointMana = mana[Math.floor(Math.random() * 3)];
    return pointMana;
};


// affectation fleche pour archer
export function fleche() {
    let flechette = [7, 8, 9, 10, 11];
    let nbFleche = flechette[Math.floor(Math.random() * flechette.length)];
    return nbFleche;
};



// affectation des point de vie des heros
export function pointDeVie() {
    let pointMax = 300;
    let pvMage;
    let pvArcher;
    let pvGuerrier;
    let sommePv;
    alert(`Vous avez a votre disposition 1000 points de vie a partager entre vos 3 heros `)

    do {
        sommePv = 0;
        pvMage = parseInt(prompt(`entrez les points de vie pour ${mage.nom} `));
        mage.pointVie = pvMage;
        sommePv += pvMage;

        pvArcher = parseInt(prompt(`entrez les points de vie pour ${archer.nom} il reste ${pointMax - sommePv}`));
        archer.pointVie = pvArcher;
        sommePv += pvArcher;

        pvGuerrier = parseInt(prompt(`entrez les points de vie pour ${guerrier.nom} il reste ${pointMax - sommePv}`));
        guerrier.pointVie = pvGuerrier;
        sommePv += pvGuerrier;

        if (sommePv > pointMax) {
            alert(`vous avez entrez ${sommePv} cela depasse la reserve que je vous ai donner, il faut reccommencer la repartition`);
        }
        if (sommePv == pointMax) {
            alert(`vous avez entrez ${sommePv} sur les ${pointMax} que je vous ai donner on peux passer a vos point de combat`);
        }
        if (sommePv < pointMax) {
            alert(`vous avez entrez ${sommePv} sur les ${pointMax} que je vous ai donner, il vous en reste ${sommePv} a distribuer, recommencer`);
        };
    } while (sommePv != pointMax);

};



// affectation des point d'attaque des heros
export function pointDeCombat() {
    let pointMax = 150;
    let pcMage;
    let pcArcher;
    let pcGuerrier;
    let sommePc;
    alert(`Vous avez a votre disposition 1000 points d'attaque a partager entre vos 3 heros `)

    do {
        sommePc = 0;
        pcMage = parseInt(prompt(`entrez les points d'attaque pour ${mage.nom} `));
        mage.pointAttaque = pcMage;
        sommePc += pcMage;

        pcArcher = parseInt(prompt(`entrez les points d'attaque pour ${archer.nom} `));
        archer.pointAttaque = pcArcher;
        sommePc += pcArcher;

        pcGuerrier = parseInt(prompt(`entrez les points d'attaque pour ${guerrier.nom} `));
        guerrier.pointAttaque = pcGuerrier;
        sommePc += pcGuerrier;

        if (sommePc > pointMax) {
            alert(`vous avez entrez ${sommePc} cela depasse la reserve que je vous ai donner, il faut reccommencer la repartition`);
        }
        if (sommePc == pointMax) {
            alert(`vous avez entrez ${sommePc} sur les ${pointMax} que je vous ai donner on peux passer a vos point de combat`);
        }
        if (sommePc < pointMax) {
            alert(`vous avez entrez ${sommePc} sur les ${pointMax} que je vous ai donner, il vous en reste ${sommePc} a distribuer, recommencer`);
        };
    } while (sommePc != pointMax);

};


// function mode de combat attaque defense ou normale
export function modeCombat() {
    let choix = prompt(`choix mode combat normal , attaque ou defense ecrivez votre choix : `);
    while (choix != `normal` && choix != `defense` && choix != `attaque`) {
        choix = prompt(`choix mode combat normal , attaque ou defense ecrivez votre choix : `);
    };
    if (choix == `attaque`) {
        mage.attaque();
        archer.attaque();
        guerrier.attaque();
        alert(`c'est parti en mode attaque! `);
    }
    if (choix == `defense`) {
        mage.defense();
        archer.defense();
        guerrier.defense();
        alert(`c'est parti en mode defense! `);
    }
    if (choix == `normal`) {
        alert(`c'est parti ! en mode normal `);
    };
};

// bonus pour guerrier
// >* Tous les tours le guerrier gagne 1 point de rage au bout de 4 points ,le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tours puis retombe à 0 de rage et perd ce bonus.
export function bonusGuerrier() {
    return guerrier.specPerso += 1;
};

// >* Les attaques du mage lui coute 2 points quand il n'a plus assez de point de mana pour attaquer,il passe 1 tour sans attaquer et il récupère 7 points de mana
// recupmana
export function recupMana() {
    return mage.specPerso += 7;
};


// >* les attaques de l'archer consomme deux flèches par tour et récupère une flèche chaque tour.Quand il n'a plus de flèches il passe un tour et récupère 6 flèches.
// archer fleche

export function recupFleche() {
    archer.specPerso += 6;
};


export function allAction() {
    let boss = whatBoss();
    // mage.specPerso = mana();
    // archer.specPerso = fleche();
    // nomHeros(`mage`);
    // nomHeros(`archer`);
    // nomHeros(`guerrier`);
    // pointDeVie();
    // pointDeCombat();
    // modeCombat();

    // variable combat
    let mageAttaque = mage.pointAttaque;
    let archerAttaque = mage.pointAttaque;
    let guerrierAttaque = mage.pointAttaque;
    let lesHeros = [`mage`, `archer`, `guerrier`];
    let leHeros;
    let combat = true;
    let repEnigme;
    let vieAll;
    let pointGuerrier = 0;
    let guerrierPointAttaque = guerrier.pointAttaque;
    let magePointAttaque = mage.pointAttaque;
    let nbMage;
    let archerPointAttaque = archer.pointAttaque;
    let nbArcher;



    while (combat) {
        // attaque des heros
        // attaque du boss
        leHeros = lesHeros[Math.floor(Math.random() * lesHeros.length)];
        vieAll = mage.pointVie + archer.pointVie + guerrier.pointVie;


        // bonus heros guerrier
        if (pointGuerrier < 4) {
            bonusGuerrier();
        }
        if (pointGuerrier == 4) {
            guerrier.pointAttaque = guerrier.pointAttaque * 1.25;
        }
        if (pointGuerrier >= 5) {
            pointGuerrier = 0;
            guerrier.pointAttaque = guerrierPointAttaque;
        };
        pointGuerrier++;


        // bonus mage
        mage.specPerso = mage.specPerso - 2;
        if (mage.specPerso < 2) {
            mage.pointAttaque = 0;
            recupMana();
            nbMage=1;
        };
        if (nbMage==2) {
            mage.pointAttaque = magePointAttaque;
        };
        nbMage++;

        //bonus archer
        archer.specPerso -=1;
        if (archer.specPerso == 0) {
            archer.pointAttaque = 0;
            recupFleche();
            nbArcher=1;
        };
        if (nbArcher==2) {
            archer.pointAttaque = archerPointAttaque;
        };
        nbArcher++;

        console.log(archer.specPerso);

        switch (boss) {
            // boss venom vs les heros
            case `Venom`:
                // enigme pour la victoire
                if (venom.pointVie <= venom.pointVie * 0.2) {
                    repEnigme = enigmeBoss();
                    if (repEnigme) {
                        alert(`bravo vous avez vaincu le boss`);
                    }
                    if (!repEnigme || vieAll <= 0) {
                        alert(`Vous vous etes fait decimer par ${venom.nom}`);
                    };
                    return combat = false;
                };
                // verification pour savoir si le heros est vivant
                if (mage.pointVie <= 0) {
                    mageAttaque = mage.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`mage`), 1, `mort`);
                }
                if (archer.pointVie <= 0) {
                    archerAttaque = archer.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`archer`), 1, `mort`);
                }
                if (guerrier.pointVie <= 0) {
                    guerrierAttaque = guerrier.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`guerrier`), 1, `mort`);
                };

                // verifier le guerrier si i l per ses pv
                venom.pointVie -= mageAttaque + archerAttaque + guerrierAttaque;

                // elimination des mort
                do {
                    leHeros = lesHeros[Math.floor(Math.random() * lesHeros.length)];
                } while (leHeros == `mort`);

                switch (leHeros) {
                    case `mage`:
                        mage.pointVie -= venom.pointAttaque;
                        break;
                    case `archer`:
                        archer.pointVie -= venom.pointAttaque;
                        break;
                    case `guerrier`:
                        guerrier.pointVie -= venom.pointAttaque;
                        break;
                };
                console.log(venom.pointVie + ` venom`);
                console.log(`mage ` + mage.pointVie);
                console.log(`archer ` + archer.pointVie);
                console.log(`guerrier ` + guerrier.pointVie);
                break;

                // boss father vs les heros
            case `Father`:
                // enigme pour la victoire
                if (father.pointVie <= father.pointVie * 0.2) {
                    repEnigme = enigmeBoss();
                    if (repEnigme) {
                        alert(`bravo vous avez vaincu le boss`);
                    }
                    if (!repEnigme || vieAll <= 0) {
                        alert(`Vous vous etes fait decimer par ${venom.nom}`);
                    };
                    return combat = false;
                };

                // verification pour savoir si le heros est vivant
                if (mage.pointVie <= 0) {
                    mageAttaque = mage.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`mage`), 1, `mort`);
                }
                if (archer.pointVie <= 0) {
                    archerAttaque = archer.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`archer`), 1, `mort`);

                }
                if (guerrier.pointVie <= 0) {
                    guerrierAttaque = guerrier.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`guerrier`), 1, `mort`);
                };

                father.pointVie -= mageAttaque + archerAttaque + guerrierAttaque;

                // elimination des mort
                do {
                    leHeros = lesHeros[Math.floor(Math.random() * lesHeros.length)];
                } while (leHeros == `mort`);

                switch (leHeros) {
                    case `mage`:
                        mage.pointVie -= venom.pointAttaque;
                        break;
                    case `archer`:
                        archer.pointVie -= venom.pointAttaque;
                        break;
                    case `guerrier`:
                        guerrier.pointVie -= venom.pointAttaque;
                        break;
                };
                console.log(father.pointVie + ` father`);
                break;

                // boos Dio vs les heros
            case `Dio`:
                // enigme pour la victoire
                if (dio.pointVie <= dio.pointVie * 0.2) {
                    repEnigme = enigmeBoss();
                    if (repEnigme) {
                        alert(`bravo vous avez vaincu le boss `)
                    }
                    if (!repEnigme || vieAll <= 0) {
                        alert(`Vous vous etes fait decimer par ${venom.nom}`);
                    };
                    return combat = false;
                };

                if (mage.pointVie <= 0) {
                    mageAttaque = mage.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`mage`), 1, `mort`);
                }
                if (archer.pointVie <= 0) {
                    archerAttaque = archer.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`archer`), 1, `mort`);

                }
                if (guerrier.pointVie <= 0) {
                    guerrierAttaque = guerrier.pointAttaque == 0;
                    lesHeros.splice(lesHeros.indexOf(`guerrier`), 1, `mort`);
                };
                dio.pointVie -= mageAttaque + archerAttaque + guerrierAttaque;

                // elimination des mort
                do {
                    leHeros = lesHeros[Math.floor(Math.random() * lesHeros.length)];
                } while (leHeros == `mort`);

                switch (leHeros) {
                    case `mage`:
                        mage.pointVie -= venom.pointAttaque;
                        break;
                    case `archer`:
                        archer.pointVie -= venom.pointAttaque;
                        break;
                    case `guerrier`:
                        guerrier.pointVie -= venom.pointAttaque;
                        break;
                };
                console.log(dio.pointVie + ` dio`);
                break;
            default:
                break;
        };

    };

};