

export class Personnage {
    constructor(nom, pointVie, pointAttaque) {
        this.nom = nom;
        this.pointVie = pointVie;
        this.pointAttaque = pointAttaque;
    };
};

export class Boss extends Personnage {
    constructor(nom, pointVie, pointAttaque) {
        super(nom, pointVie, pointAttaque);
        this.enigme=()=>{
        };
    };
};

export class Heros extends Personnage {
    constructor(nom, pointVie, pointAttaque) {
        super(nom, pointVie, pointAttaque);
        this.defense=()=>{
        };
        this.attaque=()=>{
        };
    };
};

export class Guerrier extends Heros {
    constructor(nom, pointVie, pointAttaque,pointRage) {
        super(nom, pointVie, pointAttaque);
        this.pointRage = pointRage;
        
        this.defense=()=>{
        };
        this.attaque=()=>{
        };
    };
};








