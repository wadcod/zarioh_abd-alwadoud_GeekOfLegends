import {
    Boss,
    Heros
} from "./class.js";
import {
    mana,
    fleche
} from "./functions.js";

// boss
export let venom = new Boss(`Venom`,800,30);
export let father = new Boss(`Father`,800,30);
export let dio = new Boss(`Dio`,800,40);

// heros 300 pv 120 heros
export let mage = new Heros(``,100,40,mana(),`mage`);
export let archer = new Heros(``,100,40,fleche(),`archer`);
export let guerrier = new Heros(``,100,50,0,`guerrier`);
