import { Component, OnInit } from '@angular/core';
import { AddNewsComponent } from '../add-news/add-news.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  icono: any;

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log('Hola');
  
  }
  public onFileChoosen(file: any) {
    this.icono = file; 
}
}
