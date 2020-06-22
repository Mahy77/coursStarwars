import { Component, OnInit } from '@angular/core';
import { Spaceship } from 'src/app/models/spaceship';
import { SpaceshipService } from 'src/app/services/spaceship.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-spaceship',
  templateUrl: './add-spaceship.component.html',
  styleUrls: ['./add-spaceship.component.css']
})
export class AddSpaceshipComponent implements OnInit {

   spaceship = new Spaceship;
  constructor(private spaceshipService: SpaceshipService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  submitSpaceship(): void {
    this.spaceshipService.addSpaceship(this.spaceship);
    this.router.navigate(['/spaceships']);
    this.toastr.success('Nouveau Vaisseau ajouté!', 'Trop fort!');
  }
  
}
