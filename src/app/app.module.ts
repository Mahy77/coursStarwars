import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpaceshipsComponent } from './components/spaceships/spaceships.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { AddSpaceshipComponent } from './components/add-spaceship/add-spaceship.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FirstCharPipe } from './pipes/first-char.pipe';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditSpaceshipComponent } from './components/edit-spaceship/edit-spaceship.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlanetsComponent,
    SpaceshipsComponent,
    HomeComponent,
    PlanetDetailComponent,
    SpaceshipDetailComponent,
    AddSpaceshipComponent,
    AddPlanetComponent,
    FirstCharPipe,
    EditPlanetComponent,
    EditSpaceshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
