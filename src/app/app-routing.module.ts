import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { MisionComponent } from './pages/mision/mision.component';

import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SeguroComponent } from './pages/seguro/seguro.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { AlquileresComponent } from './pages/alquileres/alquileres.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { AereosComponent } from './pages/aereos/aereos.component';
import { AddNewsComponent } from './pages/add-news/add-news.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'publicar', component: AddNewsComponent},
  {path:'mision', component: MisionComponent},
  {path:'noticias', component: NoticiasComponent},
  {path:'paquetes', component: PaquetesComponent},
  {path:'seguros', component: SeguroComponent},
  {path:'alquileres', component: AlquileresComponent},
  {path:'hoteles', component: HotelesComponent},
  {path:'aereo', component: AereosComponent},
  {path:'**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
