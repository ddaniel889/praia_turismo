import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusiframeComponent } from './components/busiframe/busiframe.component';
import { ImageCityComponent } from './components/image-city/image-city.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BusiframeComponent, ImageCityComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,FooterComponent,BusiframeComponent,ImageCityComponent]
})
export class SharedModule { }
