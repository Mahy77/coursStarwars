import { Component, OnInit } from '@angular/core';
import { Spaceship } from 'src/app/models/spaceship';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceshipService } from 'src/app/services/spaceship.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-spaceship',
  templateUrl: './edit-spaceship.component.html',
  styleUrls: ['./edit-spaceship.component.css']
})
export class EditSpaceshipComponent implements OnInit {
  spaceship: Spaceship;
  constructor(private activatedRoute: ActivatedRoute, private spaceshipService: SpaceshipService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.spaceship = this.spaceshipService.getOnespaceshipById(id);
  }

  editSpaceship(): void {
    this.spaceshipService.editSpaceship(this.spaceship);
    this.router.navigate(['/spaceships']);
    this.toastr.success('Vaisseau modifié!', 'Congratulations!')
  }
}
