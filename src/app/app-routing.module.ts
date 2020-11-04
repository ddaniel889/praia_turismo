import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { MisionComponent } from './pages/mision/mision.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'mision', component: MisionComponent},
  {path:'**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
