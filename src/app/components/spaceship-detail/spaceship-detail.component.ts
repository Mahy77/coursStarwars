import { Component, OnInit } from '@angular/core';
import { Spaceship } from 'src/app/models/spaceship';
import { ActivatedRoute } from '@angular/router';
import { SpaceshipService } from 'src/app/services/spaceship.service';

@Component({
  selector: 'app-spaceship-detail',
  templateUrl: './spaceship-detail.component.html',
  styleUrls: ['./spaceship-detail.component.css']
})
export class SpaceshipDetailComponent implements OnInit {
  id: number;
  spaceship: Spaceship
  constructor(private route: ActivatedRoute, private spaceshipService: SpaceshipService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.spaceship = this.spaceshipService.getOnespaceshipById(this.id);
  }

}
