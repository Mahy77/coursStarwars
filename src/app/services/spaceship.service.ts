import { Injectable } from '@angular/core';
import {Spaceship} from '../models/spaceship';
@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {
  spaceshipTable = [
    new Spaceship(1, 'Faucon millenium', 'falcon.jpg', true, 'Corporation Technique Corellienne', 'Le Faucon Millenium est construit durant la République Galactique. Un certain temps après l\'avènement de l\'Empire5, il entre en possession de Lando Calrissian, qui y apporte de nombreuses modifications. En 10 a.v. BY5, Lando accepte d\'utiliser son vaisseau pour aider le groupe constitué de Tobias Beckett, Chewbacca, Han Solo et Qi\'ra à voler du coaxium brut sur la planète Kessel et vite aller le faire stabiliser sur la planète Savareen, pour le compte de l\'Aube Écarlate. À la suite de cette mission, Han Solo réussit à remporter le vaisseau lors d\'un match de Savaac contre Lando, et devient de fait le nouveau propriétaire du Faucon Millenium. Han Solo et Chewbacca se servent du vaisseau pour effectuer des missions de contrebande pour le compte de Jabba le Hutt et Han y apporte de nouvelles modifications, jusqu\'au jour où le duo fait la rencontre d\'un Maître Jedi survivant de l\'Ordre 66, Obi-Wan Kenobi, et du fils d\'Anakin Skywalker, Luke, qui le paient pour les escorter jusqu\'à la planète Alderaan puis pour faire évader la princesse Leia Organa de l\'Étoile de la Mort, avant de jouer un rôle crucial dans la destruction de cette dernière en déstabilisant le vaisseau de Dark Vador lors de la Bataille de Yavin. À la suite de cet affrontement, le Faucon devient partie prenante de l\'Alliance Rebelle, dont Han Solo et Chewbacca sont devenus des membres reconnus. Après s\'être enfui de la Bataille de Hoth, il retrouve le chemin de Lando, devenu dirigeant de la Cité des Nuages en orbite autour de la planète Bespin. Lorsque la Cité est envahie par les troupes de l\'empire, Han Solo est ensuite libéré grâce à un stratagème de Luke et revient aux commandes du vaisseau. Le Faucon participe à la Bataille d\'Endor en 4 a.p. BY, bataille qui scelle la victoire de l\'Alliance Rebelle dans la Guerre Civile Galactique avec la mort de l\'Empereur Palpatine et de Dark Vador, ainsi que la destruction de la deuxième Étoile de la Mort. Après la fin de la guerre, le vaisseau est volé à Han Solo par un autre contrebandier, Gannis Ducain, qui se le fait à son tour voler par les Irvin, puis une nouvelle fois par Unkar Plutt, et atterrit finalement sur la planète Jakku. En 34 a.p. BY, la pilleuse d\'épave Rey et un stormtrooper en fuite, FN-2187, dit Finn, s’approprient le vaisseau pour fuir Jakku, ce qui permet à Han Solo et Chewbacca de le détecter et de le récupérer. À son bord, le groupe rejoint la Résistance, une organisation paramilitaire menée par Leia Organa et luttant contre l\'ascension du Premier Ordre, héritier de l\'Empire hostile à la Nouvelle République. Han, Chewbacca et Finn pilotent le Faucon pour infiltrer la base Starkiller afin de libérer Rey, capturée par Ben, le fils de Han Solo, et permettre aux vaisseaux de la Résistance de l\'infiltrer et de la détruire. Han Solo meurt sur Starkiller, tué par Ben. Chewbacca et Rey, derniers occupants du Faucon, se rendent sur la planète Ahch-To pour retrouver Luke Skywalker, exilé après la destruction du Nouvel Ordre Jedi. Le vaisseau participe ensuite à la Bataille de Crait et permet aux derniers survivants de la Résistance de s\'échapper à son bord.'),
    
    new Spaceship(2, 'X-Wing', 'xwing.jpeg', false, 'Incom Corporation', 'Le X-wing a connu plusieurs versions, continuellement améliorées. Le T-65AC1 original mis en service par l’Alliance rebelle, est un appareil d’attaque polyvalent correct pour son temps mais vite supplanté par le T-65AC2, vantant une meilleure accélération. Le T-65AC3 améliore l’électronique embarquée, les boucliers et les sondes. Le T-65AC4 est principalement une mise à niveau des moteurs, ce qui en fait un engin presque égal à l’A-wing en termes de manœuvrabilité. On notera une nouveauté de conception pour le T-65D-A1, qui remplace le droïde astromécanicien par un ordinateur interne pour les calculs de saut en hyperespace, mais il est considéré comme un échec, partiellement dû à la facilité de sabotage.'),

    new Spaceship(3, 'Y-Wing', 'ywing.jpg', false, 'Manufacture Koensayr', 'Les Y-Wings possédaient au départ deux places, pour un pilote clone et un canonnier ainsi qu\'un emplacement de droïde astromécano. Lors de leur récupération par les rebelles, ils furent allégés et la place pour le canonnier disparut. Des moteurs à réaction ionique R200 étaient installés, ainsi que deux canons à ion SW-4 en position supérieure et deux canons laser IX4 à l\'avant, pouvant être remplacés par deux canons à ion SW-5 et deux canons laser KX5. Ils possèdent aussi deux lances-torpilles à proton Flex Tube pour leur fonction de bombardier. Le tout est alimenté par une cellule d\'alimentation cryogénique 03-R couplée à un générateur d\'énergie.')
  ];
  constructor() { }
  getAllspaceships(): Spaceship[] {
    return this.spaceshipTable;
   }

   getOnespaceshipById(id: number): Spaceship {
    return this.spaceshipTable.filter(spaceship => spaceship.id === id)[0];
  }

  addSpaceship(spaceship: Spaceship): void{
    this.spaceshipTable.push(spaceship);
  }

  spaceshipDelete(spaceship: Spaceship): Spaceship []{
    this.spaceshipTable = this.spaceshipTable.filter(spaceshipToDelete => spaceship !== spaceshipToDelete);
    return this.spaceshipTable;
  }
  editSpaceship(spaceship: Spaceship): Spaceship [] {
    this.spaceshipTable.filter(spaceshipToEdit => spaceship === spaceshipToEdit)[0] = spaceship;
    return this.spaceshipTable;
  }
}
