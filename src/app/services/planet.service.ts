import { Injectable } from '@angular/core';
import {Planet} from '../models/planet'


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet(1, 'Tatooine', 'tatooine.jpg', 'Jawas et Tuskens', 'Épisode IV'),
    new Planet(2, 'Naboo', 'Naboo.jpg', 'Gungan et humains', 'Épisode I'),
    new Planet(3, 'Lune forestière d\'Endor', 'endor.jpeg', 'Duloks, Ewoks et Yuzzum', 'Épisode VI')
  ];
  constructor() { }
  getAllPlanets(): Planet[] {
    return this.planets;
   }
  
  getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet => planet.id === id)[0];
  }

  addPlanet(planet: Planet): void {
    this.planets.push(planet);
  }
  planeteDelete(planet: Planet): Planet []{
    this.planets = this.planets.filter(planetToDelete => planet !== planetToDelete);
    return this.planets;
  }
  editPlanet(planet: Planet): Planet [] {
    this.planets.filter(planetToEdit => planet === planetToEdit)[0] = planet;
    return this.planets;
  }
}
