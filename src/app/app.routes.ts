// import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FindheroComponent } from './components/findhero/findhero.component';

// dentro de la constante es un arreglo de rutas que tiene un path y un component respectivo
// si no encuentra alguna ruta devolvera la ruta ** redirectTo a una ruta en particular
// importamos el componente HomeComponent
// se debe decirle a angular que disponemos de un sistema de rutas, esto se especifica en el app.module
// se debe declarar en el array imports
// luego para que renderice en la pagina, vamos a app.component.html y, donde sea que queremos que sea renderizado
// escribimos <router-outlet></router-outlet>
// ruta heroe con parametro
const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'findhero/:termino', component: FindheroComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [],
//     declarations: [],
// })
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// si necesito usar hashes (#) usamos la siguiente linea
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash : true});
// cuando no usamos hash, el index debe tener <base href="/">
