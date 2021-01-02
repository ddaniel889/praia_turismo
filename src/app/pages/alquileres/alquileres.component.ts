import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit {

  private url = 'https://www.agentcars.com/subsite/es-es/site/index';
  public urlSafe: SafeResourceUrl;

  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


}
//import { Plugins } from 'src/app/services/funciones';

//private plugins = (): void => {
  //Plugins.stickyHeader();
//}

//   this.plugins();