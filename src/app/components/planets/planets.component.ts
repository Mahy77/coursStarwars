import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {Planet} from '../../models/planet';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  constructor(private planetService: PlanetService) { }

  isLoading: boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this.planetService.getAllPlanets().subscribe((data: Planet[]) => {
      this.planets = data;
      this.isLoading = false;
    })
  }

  planeteDelete(planet: Planet) {
    this.planets = this.planetService.planeteDelete(planet);
  }
}
