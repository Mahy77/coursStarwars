import { Component, OnInit } from '@angular/core';
import {SpaceshipService} from '../../services/spaceship.service';
import {Spaceship} from '../../models/spaceship';


@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.css']
})
export class SpaceshipsComponent implements OnInit {
  spaceships : Spaceship[]
  constructor(private spaceshipService: SpaceshipService) { }

  isLoading: boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this.spaceshipService.getAllspaceships().subscribe((data: Spaceship[]) => {
      this.spaceships = data;
      this.isLoading = false;
    })
  }

  spaceshipDelete(spaceship: Spaceship) {
    this.spaceships = this.spaceshipService.spaceshipDelete(spaceship);
  }
}
