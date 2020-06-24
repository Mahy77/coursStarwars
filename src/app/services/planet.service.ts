import { Injectable } from '@angular/core';
import {Planet} from '../models/planet'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  apiURL = 'http://localhost:3000/planets';
  httpOtion ={
    headers : new HttpHeaders({
      'Content-Type': 'starwars/json'
    })
  };
  planets = [
    new Planet(1, 'Tatooine', 'tatooine.jpg', 'Jawas et Tuskens', 'Épisode IV'),
    new Planet(2, 'Naboo', 'Naboo.jpg', 'Gungan et humains', 'Épisode I'),
    new Planet(3, 'Lune forestière d\'Endor', 'endor.jpeg', 'Duloks, Ewoks et Yuzzum', 'Épisode VI')
  ];
  constructor(private http: HttpClient) {
    this.planets = [];
   }
  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiURL).pipe(retry(1),catchError(this.handleError)
    );
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

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      window.alert(errorMessage);
    return throwError(errorMessage);
}
  }
}