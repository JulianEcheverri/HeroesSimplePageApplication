import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  // consumiremos el servicio de forma privada
  // importamos router para redireccionar y correr la funcion
  heroes: Heroe[] = [];
  constructor(private heroesServices: HeroesService, private router: Router ) {
      // console.log('constructor');

   }

  //  OnInit es utilizado cuando la pagina esta renderizada, el constructor se ejecuta antes del OnInit
  ngOnInit() {
    // console.log('ngOnInit');
    this.heroes = this.heroesServices.getHeroes();
    // console.log(this.heroes);
  }
  // funcion para redireccionar a la pagina de heroe, recibe el parametro id (el indice), usada en el html component
  // se necesita importar router
  verHeroe(idx: number){
    // con la variable router creada en el constructor, usamos la funcion navigate y se le pasa el path como esta en routes
    this.router.navigate(['/heroe', idx]);
  }
}

