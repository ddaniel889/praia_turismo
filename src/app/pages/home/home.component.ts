import { Component, OnInit,ViewChild,Renderer2,ElementRef,AfterViewInit,Input,ViewChildren} from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
   url: string = 'https://stackoverflow.com/';
  @Input() src: string;
  urlSafe:SafeResourceUrl;

  @ViewChild('rodovia') rodovia: ElementRef;
 // @ViewChildren(rodovia) rodovia:QueryList<rodovia>;
 //@ViewChild('target') target: ElementRef;

  constructor(private rendered: Renderer2,private elRef: ElementRef,public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngAfterViewInit () {
    // TODO: ? Con esto aqui tiene todo el iframe Object
    // ? y puedes modificarlo agregando o quitando
    //console.log('iframee', this.rodovia.nativeElement);
    
    // ? por ejemplo
    //let confirma = document.querySelectorAll(".search-box")
    //console.log(confirma)
    /*this.rendered.setStyle(this.rodovia.nativeElement, 'background', 'black');
    let div = this.rodovia.nativeElement;
    const iframe = div.contentDocument;
    console.log('valor de iframe'+iframe);
    console.log('El div'+div);
    console.log('total'+div.length);
    let listnode = div;*/

// Using for..of 
/*for(let value of listnode.values() ) { 
  console.log(value); 
}*/

///host element

const hostElement = this.rodovia.nativeElement;
console.log(hostElement)
let select = document.querySelectorAll(".search-box");
console.log(select)
//const iframe2 = hostElement.contentDocument;
//zconsole.log(iframe2)
//console.log(hostElement.children);
//console.log(hostElement.parentNode);
let doc =  this.rodovia.nativeElement.contentDocument || this.rodovia.nativeElement.contentWindow;
console.log(doc);
console.log('iframe', this.rodovia.nativeElement.style.border = '1px solid black');
//const iframe2 = hostElement.contentDocument;
//console.log(iframe2);
// console.log(iframe2.children[0])
//const iframe3 = document.getElementById('rodovia') as HTMLIFrameElement;
//console.log('valor de '+iframe3);
    //this.rendered.setStyle(div, 'background-color', 'rgb(224 115 11 / 80%)');
   

    // ?  si vas a html del DOM vas a ver que el iframe tiene estas propiedades
    // ? Entonces para poder modificar mas adentro es necesario hacer uso de un array y buscar el element que se quiere modificar en el console puedes ver el objeto iframe con todos sus elementos
   
  }

  /*addMyClass(){
    this.rendered.addClass(this.rodovia.nativeElement, "search-box");
  }*/
}
