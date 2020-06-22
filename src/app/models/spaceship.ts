export class Spaceship {
    id : number;
    model: string;
    picture: string;
    speedOfLight: boolean;
    constructeur: string;
    story: string;
    constructor(id: number = null, model: string = null, picture: string = null, speedOfLight: boolean = null, constructeur : string = null, story: string = null) {
        this.id = id;
        this.model = model;
        this.picture = picture;
        this.speedOfLight = speedOfLight;
        this.constructeur = constructeur;
        this.story = story;
}
}
