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
        console.log(1 + Math.trunc(Math.random() *6))
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
const couteau = new Weapon("Couteau", "offesive", 10, 0)
const tuyau = new Weapon("Tuyau en fer", "mixte", 30, 10)
const masse = new Weapon("Masse", "offensive", 50, -10)
const arc = new Weapon("Arc", "distance", 20, 50)
const batteBaseball = new Weapon("Batte de Baseball", "offensif", 40 , 0)
const machette = new Weapon("Machette", "offensif", 60, 0)
const magnum = new Weapon("Magnum", "Legendaire", 100, 100)


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





const aps = require("async-prompt");

async function main(){
  const joueur = new Player();
  joueur.name= await aps("Quelle est votre prenom ?")
  joueur.age = await aps("Quelle est votre age ?")
  joueur.weapon = poings
  joueur.health = 100
  joueur.strenght = 100
  joueur.level = 1
  

  console.log(`${joueur.name} , Vous vous reveillez après une longue nuit de sommeil , vous avez une sensation bizarre , comme si quelque chose de grave vennez d'arriver ... vous décidez de vous faire un café mais pas de courant , cela renforce votre présentiment . Il est 9h , vous devez vous préparer pour aller au boulot , mais l'ambiance est inhabituelle , pas un bruit , à part des bruits sourd au loin . Vous décider de poursuivre comme si ne rien était et vous tentez d'appeler un taxi pour vous rendre au travail mais le réseau est indisponible ... Vous commencez à comprendre qu'il se passe quelque chose de pas net et vous décider d'aller voir vos voisins pour voir si eux, ont du courant ou du réseau ...  `)
  console.log("Vous ouvrez votre porte d'entrée et votre mauvais présentiment s'amplifie , aucun bruit extérieur ... De plus vous voyez des voitures accidentées , des débris de vitre partout ... vous vous sentez comme seul au monde! Vous vous rendez chez vos voisins , vous sonnez et ... rien ne se ... Vous entendez un bruit , sans doute le vent qui tape sur les vitres . C'est inquiet que vous faites demi-tour...")
  
  const decision1 = await aps(`${joueur.name} , Que voulez-vous faire : Continuer votre chemin sur la rue principale qui semble calme ou aller vers le centre ville ?`)
  
  if(decision1 === "Continuer"){
      console.log("a definir")
    }else{
     console.log("Vous avancez la boule au ventre toujours avec vos mauvaises impressions , vous marchez , marchez encore et encore , sans avoir croisé personne et des bruits étranges sont de plus en plus présent , vous commencez à vous poser des questions quand soudain , une explosion retentit accompagnée de tirs d'arme à feu , cela vous effraie et faite immédiatement demi-tour . Vous courrez comme si votre vie en dépendait , jusqu'au moment ou vous entendez comme un gémissement , comme des cris de douleur ...")
    }

const decision2 = await aps(`${joueur.name} , Que voulez-vous faire ? Aller aider la personne en difficulté ou ignorer les cris et continuer votre fuite`)
    if(decision2 ==="aider la personne"){
        console.log("Le stress monte , votre rythme cardiaque augmente , vous avez l'impression de ne plus rien contrôler , mais vous essayer de garder votre sang-froid et d'aller secourir la personne , le bruit vient de la maison d'en face de vous... la porte est entre-ouverte , vous rentrez sans réfléchir et vous découvrez les lieux , une odeur nauséabonde , des traces de sang et ces cris ... des cris qui vous glaçe le sang. tout est en désordre mais vous trouver une paire de ciseaux ...")
        const decision3 = await aps("voulez-vous prendre les ciseaux ?")
        if(decision3 === "oui"){
           joueur.weapon = ciseaux;
           joueur.strenght = joueur.strenght + ciseaux.addStatStrenght;
           joueur.health = joueur.health + ciseaux.addStatHealth
           console.log("Vous essayer de localiser d'ou proviennent les cris , les bruits semblent venir de l'étage , vous montez discretement les escaliers , et vous aprecevez une flaque de sang qui s'étend à travers une porte ainsi que des hurlements ... ")
           const decision4 = await aps(`${joueur.name} , Que voulez-vous faire ? ouvrir la porte ou faire demi-tour`)
           if(decision4 === "ouvrir la porte"){
               console.log("a definir ")
           }else{
               console.log(`Vous tremblez de peur , vous faite demi-tour et maladroitement vous faites tomber un vase qui été poser sur un meuble à côté de vous , vous paniquez ... il n'y a plus un bruit ,vous ne bougez plus quand d'un coup vous entendez les bruits de pas de la personne courrir vers vous , elle se jette sur la porte . Vous voyez une personne avec des fringues ensanglantées , le visage couvert de blessure , du sang sur la bouche en lachant des cris . ${joueur.name}, vous faites face à votre premier zombie. c'est alors que débute votre premier combat`)
           }
        }else{
            console.log("a definir")
        }
    }else{
        console.log('Vous fuyez et vous tombez sur une foule de personnes qui courent vers vous , du sang pleins le visage , cela vous tétanise et vous mourrez')
        console.log("=================================GAME OVER =====================================================")
    }
}
    main()
    
    
