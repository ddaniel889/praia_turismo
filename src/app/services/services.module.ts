import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HotelsService  } from './hotels.service';
import { NoticiasService  } from './noticias.service';
import { SegurosService  } from './seguros.service';
import { VuelosService  } from './vuelos.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule

  ],
    providers: [
        HttpClient,
        HotelsService,
        NoticiasService,
        SegurosService,
        VuelosService

    ]
})
export class ServicesModule { }
