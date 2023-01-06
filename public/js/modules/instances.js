import { Boss,Heros } from "./class.js";
import { mana,fleche } from "./functions.js";

// boss
export let venom = new Boss(`Venom`,500,30);
export let father = new Boss(`Father`,600,20);
export let dio = new Boss(`Dio`,300,40);

// heros
export let mage = new Heros(``,200,50,mana());
export let archer = new Heros(``,300,50,fleche());
export let guerrier = new Heros(``,300,50,0);




