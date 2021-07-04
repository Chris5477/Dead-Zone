class Player {
    constructor(name, age, weapon, strenght, health, level){
        this.name = name;
        this.age = age;
        this.weapon = weapon
        this.strenght = strenght,
        this.health = health;
        this.level = level
    }

    lancerDe = function(){
        return 1 + Math.trunc(Math.random() *6)
    }
    
    
}

const myCaractere = new Player(null, null, "poings", 100, 100, 1)


class Weapon {
    constructor(name, type , addStatStrenght, addStatHealth){
        this.name = name;
        this.type = type;
        this.addStatStrenght = addStatStrenght;
        this.addStatHealth = addStatHealth
    }
}

const poings = new Weapon("Poings", null, 0, 0)
const ciseaux = new Weapon("Ciseaux", "offensif", 5, 0)
const Couteau = new Weapon("Couteau", "offesive", 10, 0)
const Tuyau = new Weapon("Tuyau en fer", "mixte", 30, 10)
const Masse = new Weapon("Masse", "offensive", 50, -10)
const Arc = new Weapon("Arc", "distance", 20, 50)
const BatteBaseball = new Weapon("Batte de Baseball", "offensif", 40 , 0)
const Machette = new Weapon("Machette", "offensif", 60, 0)
const Magnum = new Weapon("Magnum", "Legendaire", 100, 100)


class Item{
constructor(name,type, stack, addHealth, addStatHealth){
    this.name = name;
    this.type = type;
    this.stack = stack;
    this.addHealth = addHealth;
    this.addStatHealth = addStatHealth;
}
}

const sacPlastique = new Item("Sac Plastique", "sac", 2, 0, 0)
const SacADos = new Item("sac à dos", "sac", 3, 0 , 0 )
const sacVoyage = new Item("Sac de vogage", "sac", 5, 0 ,0)
const giletSimple = new Item("Gilet de protetion", "armure",0, 0, 25 )
const giletLourd = new Item("Gilet lourd", "armure",0 ,0 , 50 )
const giletMilitaire = new Item("Protection militaire", "armure",0 , 0, 75 )
const sucrerie = new Item("Sucrerie", "nourriture", -1, 10, 0 )
const conserve = new Item("Conserve", "nourriture", -2, 25, 0 )
const GrosseConserve = new Item("Conserve familial", "nourriture", -2, 50, 0 )

class Ennemy{
constructor(name, strenght, health, particularity, level){
    this.name = name;
    this.strenght = strenght;
    this.health = health;
    this.particularity = particularity;
    this.level = level;
}

lancerDe = function(){
    return 1 + Math.trunc(Math.random() *6)
}


}

const zombie = new Ennemy("Zombie", 20, 80 , null, 1 )
const grosZombie = new Ennemy("Gros zombie", 40, 150 , null, 1 )
const zombieMilitaire = new Ennemy("Zombie Militaire", 60, 200 , null, 1 )
const zombie2 = new Ennemy("Zombie", 20, 80 , "Couteau planté", 1 )
const grosZombie2 = new Ennemy("Gros Zombie", 40, 150 , "Hache planté dans le dos", 1 )
const zombieMilitaire2 = new Ennemy("Zombie militaire", 60, 180 , "magnum dans son hoster", 1 )

class Boss{
constructor(name, strenght, health , pattern){
    this.name = name;
    this.strenght = strenght;
    this.health = health;
    this.pattern = pattern
}

lancerDe = function(){
    return 1 + Math.trunc(Math.random() *6)
}

}

const boss1 = new Boss("Zombie aggressif", 50 ,300, "Deux lancés de dé")
const boss2 = new Boss("Zombie Enorme", 150, 500, "attaque tout les deux tours")
const boss3 = new Boss("Zombie transformé", 80, 450, "si le dés fait moins de 3 , relance une deuxième attaque" )
const boss4 = new Boss("Zombie 0",120, 600, "Si le dé du joueur fait 1 ,2 ou 4 , evite l'attaque")



