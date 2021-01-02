import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public goTo(): void {
    this.router.navigateByUrl('/mision');
  }

  public goNot(): void {
    this.router.navigateByUrl('/noticias');
  }

  public goSeg(): void {
    this.router.navigateByUrl('/seguros');
  }

  public goPaq(): void {
    this.router.navigateByUrl('/paquetes');
  }

  public goAlq(): void {
    this.router.navigateByUrl('/alquileres');
  }

  public goHot(): void {
    this.router.navigateByUrl('/hoteles');
  }

  public goSist(): void {
    this.router.navigateByUrl('/aereo');
  }

}
