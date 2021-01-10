import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { AddNewsComponent } from '../add-news/add-news.component';
import { News } from "../../model/news";


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  icono: any;
  policies: News[];
  title:string;
  content:string;


  constructor(private noticiaService:NoticiasService) { }

  ngOnInit(): void {
    this.noticiaService.getNews().subscribe((policies: News[])=>{
      this.policies = policies;
      console.log(this.policies);
      for(let data of this.policies) {
        this.title = data.titulo;
        this.content = data.descripcion;
        //this.dni = data.pais.documento_identificador;
    }



    })
  }

  openDialog() {
    console.log('Hola');
  
  }
  public onFileChoosen(file: any) {
    this.icono = file; 
}
}
