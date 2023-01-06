

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
    constructor(nom, pointVie, pointAttaque,specPerso) {
        super(nom, pointVie, pointAttaque);
        this.specPerso = specPerso;
        
        this.defense=()=>{
        };
        this.attaque=()=>{
        };
    };
};









