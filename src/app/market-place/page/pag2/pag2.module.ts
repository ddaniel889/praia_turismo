import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pag2RoutingModule } from './pag2-routing.module';
import { Pag2Component } from './pag2.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';


@NgModule({
  declarations: [Pag2Component, CompAComponent, CompBComponent],
  imports: [
    CommonModule,
    Pag2RoutingModule
  ]
})
export class Pag2Module { }
