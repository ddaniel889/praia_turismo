import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import $ from 'jquery';


@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit {

  
  idd:any;
  private url = 'https://www.agentcars.com/subsite/es-es/site/index';
  public urlSafe: SafeResourceUrl;

  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  

  closeModal() {
    $("#exampleModal").modal('toggle');
  }
}
//import { Plugins } from 'src/app/services/funciones';

//private plugins = (): void => {
  //Plugins.stickyHeader();
//}

//   this.plugins();

