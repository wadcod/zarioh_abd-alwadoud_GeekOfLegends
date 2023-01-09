import {
    Boss,
    Heros
} from "./class.js";
import {
    mana,
    fleche
} from "./functions.js";

// boss
export let venom = new Boss(`Venom`,3000,50);
export let father = new Boss(`Father`,3000,50);
export let dio = new Boss(`Dio`,3000,50);

// heros 300 pv 120 heros
export let mage = new Heros(``,100,40,mana(),`mage`);
export let archer = new Heros(``,100,40,fleche(),`archer`);
export let guerrier = new Heros(``,100,50,0,`guerrier`);
