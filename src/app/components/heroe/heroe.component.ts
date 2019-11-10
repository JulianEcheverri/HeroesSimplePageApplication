import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {}; // variable tipo objeto que almacena nuestro heroe

  // para recibir el parametro enviado por el url
  // se debe importar el ActivatedRoute
  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      // siempre se reciben strings de esta forma, obtengo todos los parametros
      // console.log(params);
      // para obtener parametro especifico tipado
      // console.log(params.id);
      this.heroe = this.heroeService.getHeroe(params.id);
    });
   }

  ngOnInit() {
  }

}
