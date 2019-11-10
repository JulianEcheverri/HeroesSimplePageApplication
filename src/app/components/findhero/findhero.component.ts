import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-findhero',
  templateUrl: './findhero.component.html'
})
export class FindheroComponent implements OnInit {
  heroesEncontrado: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.termino);
      this.termino = params.termino;
      this.heroesEncontrado = this.heroeService.findHeroes(params.termino);
      // console.log(this.heroesEncontrado);
    });
  }
}
