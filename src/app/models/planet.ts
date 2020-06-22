export class Planet {
    id : number;
    name: string;
    picture: string;
    intelligentSpecies: string;
    story: string;
    constructor(id: number = null, name: string = null, picture: string = null, intelligentSpecies: string = null, story : string = null) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.intelligentSpecies = intelligentSpecies;
        this.story = story;
}
}
