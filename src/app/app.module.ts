import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// routes //
import { APP_ROUTING } from './app.routes';
// routes //


// services//

// services//

// components //
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './components/services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FindheroComponent } from './components/findhero/findhero.component';
import { HeroecardComponent } from './components/heroecard/heroecard.component';
// components //


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    FindheroComponent,
    HeroecardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
