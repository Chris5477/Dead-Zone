class Player {
  constructor(name, age, stack, weapon, strenght, health, level, xp) {
    this.name = name;
    this.age = age;
    this.stack = stack;
    this.weapon = weapon;
    this.strenght = strenght;
    this.health = health;
    this.level = level;
    this.xp = xp;
  }

  lancerDe = function () {
    const totalDe = 1 + Math.trunc(Math.random() * 6);
    console.log(`vous faites ${totalDe} .`);
    return totalDe;
  };
}
class Weapon {
  constructor(name, type, addStatStrenght, addStatHealth) {
    this.name = name;
    this.type = type;
    this.addStatStrenght = addStatStrenght;
    this.addStatHealth = addStatHealth;
  }
}

const poings = new Weapon("Poings", null, 0, 0);
const ciseaux = new Weapon("Ciseaux", "offensif", 5, 0);
const couteau = new Weapon("Couteau", "offesive", 10, 0);
const tuyau = new Weapon("Tuyau en fer", "mixte", 30, 10);
const hache = new Weapon("Hâche", "offensive", 50, -10);
const arc = new Weapon("Arc", "distance", 20, 50);
const batteBaseball = new Weapon("Batte de Baseball", "offensif", 40, 0);
const machette = new Weapon("Machette", "offensif", 60, 0);
const magnum = new Weapon("Magnum", "Legendaire", 100, 100);

class Item {
  constructor(name, type, stack, addHealth, addStatHealth) {
    this.name = name;
    this.type = type;
    this.stack = stack;
    this.addHealth = addHealth;
    this.addStatHealth = addStatHealth;
  }
}

const sacPlastique = new Item("Sac Plastique", "sac", 2, 0, 0);
const SacADos = new Item("sac à dos", "sac", 3, 0, 0);
const sacVoyage = new Item("Sac de vogage", "sac", 5, 0, 0);
const giletSimple = new Item("Gilet de protetion", "armure", 0, 0, 25);
const giletLourd = new Item("Gilet lourd", "armure", 0, 0, 50);
const giletMilitaire = new Item("Protection militaire", "armure", 0, 0, 75);
const sucrerie = new Item("Sucrerie", "nourriture", -1, 10, 0);
const conserve = new Item("Conserve", "nourriture", -2, 25, 0);
const GrosseConserve = new Item("Conserve familial", "nourriture", -2, 50, 0);

class Ennemy {
  constructor(name, strenght, health, particularity, level) {
    this.name = name;
    this.strenght = strenght;
    this.health = health;
    this.particularity = particularity;
    this.level = level;
  }

  lancerDe = function () {
    const totalDe = 1 + Math.trunc(Math.random() * 6);
    console.log(`Votre adversaire fait ${totalDe}`);
    return totalDe;
  };
}

const zombie = new Ennemy("Zombie", 60, 80, null, 1);
const grosZombie = new Ennemy("Gros zombie", 70, 100, null, 1);
const zombieMilitaire = new Ennemy("Zombie Militaire", 80, 200, null, 1);
const zombie2 = new Ennemy("Zombie", 45, 80, "Couteau planté", 1);
const zombieFaible = new Ennemy("Zombie affaibli", 50, 60, "Hache planté dans le cou", 1);
const zombieMilitaire2 = new Ennemy("Zombie militaire", 100, 180, "magnum dans son hoster", 1);

class Boss extends Ennemy {
  constructor(name, strenght, health, pattern) {
    super(name, strenght, health);
    this.pattern = pattern;
  }

  lancerDe = function () {
    return 1 + Math.trunc(Math.random() * 6);
  };
}

const boss1 = new Boss("Zombie aggressif", 50, 300, "Deux lancés de dé");
const boss2 = new Boss("Zombie Enorme", 150, 500, "attaque tout les deux tours");
const boss3 = new Boss("Zombie transformé", 80, 450, "si le dés fait moins de 3 , relance une deuxième attaque");
const boss4 = new Boss("Zombie 0", 120, 600, "Si le dé du joueur fait 1 ,2 ou 4 , evite l'attaque");

const fight = async (player, ennemy) => {
  const healtEnnemy = ennemy.health;
  while (player.health !== 0 || ennemy.health !== 0) {
    await aps(styleConsole.fight("Appuyer pour lancer votre attaque ?"));
    const resDe = player.lancerDe(zombie.name, zombie.health);
    let dammage = player.strenght * (resDe / 10);
    console.log(styleConsole.dammageEnnemy(`Vous faites ${dammage} de dégat à votre adversaire`));
    ennemy.health = ennemy.health - dammage;
    console.log(styleConsole.warning(`il reste ${ennemy.health} de santé a ${ennemy.name}`));
    if (ennemy.health <= 0) {
      console.log(
        styleConsole.green(
          "Vous avez vaincu " + ennemy.name + " . Vous gagnez " + healtEnnemy * player.health * ("0.0" + player.level) + " point d'XP"
        )
      );
      player.xp += healtEnnemy * player.health * ("0.0" + player.level);
      if (player.xp >= 100) {
        player.level = 2;
        player.strenght += 15;
        player.health += 20;
        console.log(styleConsole.green(`Vous êtes niveau 2 , votre force passe à ${player.strenght} et votre santé passe à ${player.health}`));
      }
      break;
    }
    await aps(styleConsole.fight("Appuyer Pour lancer l'attaque de votre adversaire"));
    const resDeE = ennemy.lancerDe(player.health);
    let dammageE = ennemy.strenght * (resDeE / 10);
    console.log(styleConsole.dammagePlayer(`L'ennemi vous inflige ${dammageE} de dégat`));
    player.health = player.health - dammageE;
    console.log(styleConsole.warning(`il vous reste ${player.health} de santé`));
    if (player.health <= 0) {
      console.log("dead");
      break;
    }
  }
};

const sleep = async (player) => {
  console.log(
    styleConsole.warning(
      "Voici un combat pour déterminer combien de PV vous aller récuperer , si vous faites plus que l'adversaire , vous gagnez un point. Chaque point vaut 10 points de vie. la partie dure 5 manches et s'arrête si vous faites moins de votre adversaire"
    )
  );
  let point = -1;
  let resDe = 1;
  let resDeIa = 0;
  while (resDe > resDeIa) {
    if (point === 5) {
      break;
    }
    point++;
    await aps(styleConsole.fight("Jouez votre tour"));
    resDe = player.lancerDe();
    await aps(styleConsole.fight("Jouez le tour de l'adversaire"));
    resDeIa = player.lancerDe();
  }
  const totalHealth = point * 10;
  player.health += totalHealth;
  console.log(styleConsole.green(`Vous avez récuperé ${totalHealth}, votre vie passe à ${player.health}`));
};

let player = require("play-sound")((opts = {}));
const chalk = require("chalk");
const aps = require("async-prompt");

const styleConsole = {
  warning: chalk.yellowBright.bgRed,
  dammageEnnemy: chalk.green.bgBlack,
  dammagePlayer: chalk.red.bgBlack,
  green: chalk.greenBright.bgBlack.italic,
  fight: chalk.blueBright.bold.underline,
};

const sound = {
  ambiance: {
    closeDoor: "sound-effect/ambiance/closeDoor1.mp3",
    screamMan: "sound-effect/ambiance/cri-homme1.mp3",
    explose: "sound-effect/ambiance/explosion1.mp3",
    fire1: "sound-effect/ambiance/fire1.mp3",
    noiseDoor: "sound-effect/ambiance/portequiclaque1.mp3",
    warzone: "sound-effect/ambiance/warzone.mp3",
    heart: "sound-effect/ambiance/heart.mp3",
    glassBroken: "sound-effect/ambiance/verrebrisé.mp3",
  },
  zombie: {
    attack1: "sound-effect/zombie/attackzombie1.mp3",
    attack2: "sound-effect/zombie/attackzombie2.mp3",
    hordeZombie: "sound-effect/zombie/hordezombie.mp3",
    grownZombie: "sound-effect/zombie/grognementzombie.mp3",
    meelZombie: "sound-effect/zombie/repaszombie.mp3",
    soupirZombie: "sound-effect/zombie/soupirzombie.mp3",
    noiseZombie: "sound-effect/zombie/zombie1.mp3",
    noiseZombie2: "sound-effect/zombie/zombie2.mp3",
  },
};

async function main() {
  const joueur = new Player();
  joueur.name = await aps("Quelle est votre prenom ?");
  joueur.age = await aps("Quelle est votre age ?");
  joueur.stack = 0;
  joueur.weapon = poings;
  joueur.health = 100;
  joueur.strenght = 100;
  joueur.level = 1;
  joueur.xp = 0;

  const script = {
    intro: `${joueur.name}, vous vous reveillez après une longue nuit de sommeil , vous avez une sensation bizarre, comme si quelque chose de grave venez d'arriver...Vous décidez de vous faire un café mais pas de courant , cela renforce votre présentiment. Il est 9h , vous devez vous préparer pour aller au boulot , mais l'ambiance est inhabituelle , pas un bruit , à part des bruits sourd au loin. Vous décider de poursuivre comme si ne rien était et vous tentez d'appeler un taxi pour vous rendre au travail mais le réseau est indisponible. Vous commencez à comprendre qu'il se passe quelque chose de pas net, 
    et vous décider d'aller voir vos voisins pour voir si eux, ont du courant ou du réseau...`,
    intro2: `Vous ouvrez votre porte d'entrée et votre mauvais présentiment s'amplifie , aucun bruit extérieur... De plus vous voyez des voitures accidentées , des débris de vitre partout ... vous vous sentez comme seul au monde! Vous vous rendez chez vos voisins , vous sonnez et ... rien ne se... Vous entendez un bruit, sans doute le vent qui tape sur les vitres. C'est inquiet que vous faites demi-tour...`,
    script1A: `Vous continuez votre chemin , vous observez les alentours et tout ce que vous voyez , c'est des voitures abandonnées ,certaines ont les portières ouvertes, d'autres sont défoncées mais pas un bruit ressort de cette rue.`,
    script1A2 : `Après avoir marché sur plusieurs centaines de mètres ,vous pouvez voir un bouchon de voitures abandonées, portes ouvertes , vitres explosées. Ce bouchon se situe à l'entrée d'un pont qui permettait de quitter la ville , mais vous aperçevez également une sorte de grillage. A niveau de l'entrée du pont. Vous vous posez la question sur ce délire , cela vous rappelle les nombreux films apocalyptique que vous avez pu voir , comme si c'était  une zone de quarantaine.`,
    script1A3 :`Curieux vous décidez d'approcher les voitures pour voir si un indice pourrait vous renseigner sur ce qu'il se passe mais vous distinguer un cadavre au sol, vous êtes sous le choc , en regardant le zombie , vous voyez des morsures au niveau de la jambe et du ventre, vous vous sentez mal et vous vomissez. Une fois remis de vos émotions vous entendez quelque chose , vous vous retournez et....`,
    script1A4 : `Vous voyez le cadavre se relever avec difficulté , vous êtes tétanisé de peur , vous comprenez pas, il se tient debout malgré une intégrité plus que discutable. ${joueur.name}, vous faites face a votre premier zombie et vous n'avez pas le choix de vous défendre`,
    script1A5 : `Vous venez de tuer votre premier zombie , vous vous sentez mal, vous comprenez rien... `,
    script1A6 : `Vous fouillez les voitures , vous trouvez rien de vraiment intéressant, à part un sac de voyage , deux conserves et une sucrerie`,
    script1A7 : `Vous quittez ce lieu sans trainer en continuant votre chemin. Après plusieurs métres vous entendez`,
    script1A8 : `Une explosion assez lointaine avec des tirs ,vous n'êtes pas rassurez , vous faites demi-tour pour vous éloigner, au bout de quelques minutes vous pouvez entendre quelque chose d'étrange qui semble venir vers vous.`,
    script1A9 : `En arrivant à une intersection  vous voyez les rues bondées de zombies qui semble avoir été attirés par l'explosion , vous faites demi tour et vous n'avez pas le choix vous devez vous rendre vers le centre ville.`,
    script1B1: `Vous avancez la boule au ventre toujours avec vos mauvaises impressions , vous marchez , marchez encore et encore , sans avoir croisé personne et des bruits étranges sont de plus en plus présent. Vous commencez à vous poser des questions quand soudain ...`,
    script1B2: `une explosion retentit accompagnée de tirs d'arme à feu , cela vous effraie et faite immédiatement demi-tour .`,
    script1B3: ` Vous courrez comme si votre vie en dépendait, jusqu'au moment ou vous entendez comme un gémissement , comme des cris de douleur ...`,
    script2A: `Le stress monte , votre rythme cardiaque augmente , vous avez l'impression de ne plus rien contrôler , mais vous essayer de garder votre sang-froid et d'aller secourir la personne. Le bruit vient de la maison d'en face de vous... la porte est entre-ouverte , vous rentrez sans réfléchir et vous découvrez les lieux , une odeur nauséabonde et un bordel sans nom .`,
    script2A2: `Vous voyez aussi des traces de sang et entendez comme des espèces de grognements, ces bruits vous terrifie. tout est en désordre mais vous trouver une paire de ciseaux`,
    script2B:
      " Vous fuyez et vous tombez sur une foule de personnes qui courent vers vous , du sang pleins le visage , cela vous tétanise , ils s 'approchent de vous puis ils se jettent sur vous , vous dévorent comme si ils n'avait pas mangé depuis des années .Vous êtes mort =================================GAME OVER =====================================================",
    script3A:
      "Vous essayer de localiser d'ou proviennent les cris , les bruits semblent venir de l'étage , vous montez discretement les escaliers , et vous aprecevez une flaque de sang qui s'étend à travers une porte ainsi que des hurlements ... ",
    script4A: "a definir",
    script4B: `Vous tremblez de peur , vous faite demi-tour et maladroitement vous faites tomber un vase qui été poser sur un meuble à côté de vous , vous paniquez ... il n'y a plus un bruit ,vous ne bougez plus quand d'un coup vous entendez les bruits de pas de la personne courrir vers vous , elle se jette sur la porte . Vous voyez une personne avec des fringues ensanglantées , le visage couvert de blessure , du sang sur la bouche en lachant des cris . ${joueur.name}, vous faites face à votre premier zombie. c'est alors que débute votre premier combat`,
    script5A: `Vous sentez votre coeur battre a 1000 à l'heure, vous tremblez , vous comprenez pas ce qu'il se passe, vous regarder le zombie et la flaque de sang qui coule tout autour de lui , et vous demandez si c'est un cauchemard.
    Vous décidez de vous poser 5 min histoire d'essayer de réaliser ce qu'il se passe.
    Mais le repos est de courte durée, votre combat a dû faire du bruit et a sans doute alerter des zombies dans la zone`,
    script6A: "a definir",
    script6B: `Vous poussez la commode de la chambre devant la porte en prenant soin de faire le moins de bruit possible , et vous décidez de vous planquez sous le lit.`,
    script6B1: `Quelques minutes plus tard, des coups de feu retentissent ,ce qui attire les zombies , c'est une opportunité pour vous échapper! En sortant du dessous de lit , vous voyez un sac à dos vide...`,
    script7A: `Vous descendez au rdc , vous passez par la cuisine... vous avez faim mais vous entendez des bruits comme si quelqu'un était à côté`,
    script8A: "A definir",
    script8B: `Vous avancez discretement vers l'origine du bruit , et vous voyez un zombie en train de faire son festin , a genou la bouche dans les entraille d'un cadavre , vous êtes terrifié, vous ne contrôlez plus votre respiration, mais ce qui vous choque le plus c'est que ce monstre a une hache planté au noveau du cou`,
    script8B2 : `Vous avez été trahi par le bruit de votre respiration et le zombie vous à repèrer, il se relève et commence à s'approche de vous`,
    script8A2: "Vous avez aperçu la hâche planté dans le dos du zombie",
    script9A: `Ce combat à été épuisant , vous êtes bléssé, vous décidez d'aller vous barricader et de dormir un peu afin de récuperer un peu d'énérgie`,
  };

  console.log(script.intro);
  await aps("");
  player.play(sound.ambiance.closeDoor);
  console.log(script.intro2);
  const decision1 = await aps(
    `${joueur.name} , Que voulez-vous faire : Continuer votre chemin sur la rue principale qui semble calme (1) ou aller vers le centre ville ? (2)`
  );

  if(decision1 === "1"){
    console.log(script.script1A)
    await aps("")
    console.log(script.script1A2)
    await aps("")
    console.log(script.script1A3)
    await aps("")
    player.play(sound.zombie.noiseZombie2)
    console.log(script.script1A4)
    await fight(joueur, grosZombie)
    console.log(script.script1A5)
    await aps("")
    console.log(script.script1A6)
    const prendreSac = await aps("Voulez-vous prendre le sac de voyage ?")
    if(prendreSac === "oui")
    joueur.stack = joueur.stack + sacVoyage.stack;
    console.log(styleConsole.green(`Vos stats sont modifiés : vous disposez de ${joueur.stack} emplacement(s)`));
    const prendreConserve = await aps("Voulez-vous prendre les conserves (espace disponile 5) ? ")
    if(prendreConserve === "oui")
    joueur.stack = conserve + conserve + "" +"" + "";
    console.log(styleConsole.green(`Vos stats sont modifiés : vous disposez de ${joueur.stack - 2} emplacement(s)`));
    const prendreSucrerie = await aps("Voulez-vous prendre la sucrerie ?(espace disponile 3)")
    if(prendreSucrerie === "oui")
    joueur.stack = conserve + conserve + sucrerie +"" + "";
    console.log(styleConsole.green(`Vos stats sont modifiés : vous disposez de ${joueur.stack - 3}  emplacement(s)`));
    await aps("")
    console.log(script.script1A7)
    await aps("")
    player.play(sound.ambiance.explose)
    player.play(sound.ambiance.warzone)
    console.log(script.script1A8)
    await aps("")
    player.play(sound.zombie.hordeZombie)
    console.log(script.script1A9)

    
















  }else{ 
   console.log(script.script1B1);
    await aps("");
    player.play(sound.ambiance.explose);
    player.play(sound.ambiance.warzone);
    console.log(script.script1B2);
    await aps("");
    player.play(sound.ambiance.screamMan);
    console.log(script.script1B3);
    const decision2B1 = await aps(
      `${joueur.name} , Que voulez-vous faire ? Aller aider la personne en difficulté (1) ou ignorer les cris et continuer votre fuite (2)`
    )
    decision2B1 === "1" ? console.log(script.script2A) : console.log(script.script2B);
    player.play(sound.ambiance.heart);
    await aps("");
    player.play(sound.zombie.noiseZombie);
    console.log(script.script2A2);
    const decision3A2 = await aps("voulez-vous prendre les ciseaux ?");
  
    if (decision3A2 === "oui") {
      joueur.weapon = ciseaux;
      joueur.strenght = joueur.strenght + ciseaux.addStatStrenght;
      joueur.health = joueur.health + ciseaux.addStatHealth;
      if(joueur.health < 0){
        joueur.health = 1
      }
      console.log(
        styleConsole.green(`Vos stats sont modifiées : votre force fait désormais ${joueur.strenght} et votre santé fait désormais ${joueur.health}`)
      );
    }
    console.log(script.script3A);
    const decision4A = await aps(`${joueur.name} , Que voulez-vous faire ? ouvrir la porte(1) ou faire demi-tour(2)`);
    decision4A === 1 ? console.log(script.script4A) : console.log(script.script4B);
    player.play(sound.ambiance.glassBroken);
    await fight(joueur, zombie);
  
    console.log(script.script5A);
    player.play(sound.zombie.hordeZombie);
    const decision5A = await aps(
      `${joueur.name}, Que voulez-vous faire . Essayer de partir discretement(1), ou barricader l'entrée de la chambre et attendre que ces choses s'en aillent (2)?`
    );
    decision5A === "1" ? console.log(script.script6A) : console.log(script.script6B);
    await aps("");
    player.play(sound.ambiance.warzone);
    console.log(script.script6B1);
    const decision6 = await aps(`${joueur.name}, Voulez-vous prendre le sac à dos ?`);
    if (decision6 === "oui") {
      joueur.stack = joueur.stack + SacADos.stack;
      console.log(styleConsole.green(`Vos stats sont modifiés : vous disposez de ${joueur.stack} emplacement(s)`));
    }
    console.log(script.script7A);
    player.play(sound.zombie.meelZombie);
    const decision6A = await aps(`${joueur.name}, Voulez-vous fouiller la cuisine (1) ou aller voir ce qu'il se passe (2) ?`);
    decision6A === "1" ? console.log(script.script8A) : console.log(script.script8B);
    await aps("")
    player.play(sound.zombie.soupirZombie);
    console.log(script.script8B2)
    await fight(joueur, zombieFaible);
    console.log(script.script8A2);
    const decision8A2 = await aps(`${joueur.name} , Voulez-vous prendre la hâche ?`);
    if (decision8A2 === "oui") {
      joueur.weapon = hache;
      joueur.strenght = joueur.strenght + hache.addStatStrenght - ciseaux.addStatStrenght;
      joueur.health = joueur.health + hache.addStatHealth;
      console.log(
        styleConsole.green(
          `Vos stats sont modifiées : votre force est désormais de ${joueur.strenght} et votre santé est désormais de ${joueur.health}`
        )
      );
    }
  
    console.log(script.script9A);
    await sleep(joueur);
  }
}



main();
