import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceComponent } from './market-place.component'; 
import {Pag2Module} from "./page/pag2/pag2.module";
//import { Pag2Component } from './page/pag2/pag2.component';

@NgModule({
  declarations: [MarketPlaceComponent/*,Pag2Component*/],
  imports: [
    CommonModule,
    MarketPlaceRoutingModule,
    Pag2Module
  ]
})
export class MarketPlaceModule { }
