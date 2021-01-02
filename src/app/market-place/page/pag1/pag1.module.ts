import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pag1RoutingModule } from './pag1-routing.module';
import { Pag1Component } from './pag1.component';


@NgModule({
  declarations: [Pag1Component],
  imports: [
    CommonModule,
    Pag1RoutingModule
  ]
})
export class Pag1Module { }
