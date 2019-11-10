import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroecard',
  templateUrl: './heroecard.component.html'
})
export class HeroecardComponent implements OnInit {
  // el input me dice en el componente que una propiedad va a ser recibida desde afuera
  // le agregamos el decorador input que quiere decir que la variable heroe puede venir desde afuera
  @Input() heroe: any = {};
  @Input() index: number;
  // para recibir tambien el indice y poder utilizarlo 
  // en la funcion de ver heroe y luego llamarla en el boton 'ver mas'
  // para emitir una salida a un componente superior, usamos @output y el eventEmiter
  // es el evento que quiero que el componente superior este escuchando
  // es de tipo event emiter y se le pone el tipo de dato que voy a recibir
  // se debe inicialzar en el constructor
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private heroesServices: HeroesService, private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // en la funcion le digo que quiero emitir lo que quiera, en este caso el index
    // this.heroeSeleccionado.emit(this.index);
  }

}
