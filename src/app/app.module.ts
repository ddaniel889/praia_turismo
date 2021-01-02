import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {ServicesModule} from "./services/services.module";   
import {MarketPlaceModule} from "./market-place/market-place.module";
import {SharedModule} from "./shared/shared.module";
import { MisionComponent } from './pages/mision/mision.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SeguroComponent } from './pages/seguro/seguro.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { AlquileresComponent } from './pages/alquileres/alquileres.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { AereosComponent } from './pages/aereos/aereos.component';
import { AddNewsComponent } from './pages/add-news/add-news.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MisionComponent,
    NoticiasComponent,
    SeguroComponent,
    PaquetesComponent,
    AlquileresComponent,
    HotelesComponent,
    AereosComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServicesModule,
    MarketPlaceModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
