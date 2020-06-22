import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpaceshipsComponent } from './components/spaceships/spaceships.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { AddSpaceshipComponent } from './components/add-spaceship/add-spaceship.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
 { path: 'home',      component: HomeComponent },
 { path: 'spaceships',      component: SpaceshipsComponent },
 { path: 'planets',      component: PlanetsComponent },
 { path: 'planets/add',      component: AddPlanetComponent },
 {path: 'spaceships/add',      component: AddSpaceshipComponent },
 { path: 'planets/:id', component: PlanetDetailComponent},
 { path: 'spaceships/:id', component: SpaceshipDetailComponent},
 { path: 'editplanets/:id', component :EditPlanetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
