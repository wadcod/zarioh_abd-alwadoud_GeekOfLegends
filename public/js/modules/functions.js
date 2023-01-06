import { guerrier } from "./instances.js";

export function nomHeros() {
    // let rep = prompt(`entrez le nom de votre heros`)
    // guerrier.nom = rep;
    console.log(guerrier.nom);
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