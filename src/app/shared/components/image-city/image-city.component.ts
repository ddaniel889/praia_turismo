import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-city',
  templateUrl: './image-city.component.html',
  styleUrls: ['./image-city.component.css']
})
export class ImageCityComponent implements OnInit {

  @Input('title') title: string;
  @Input('image') image: string;
  @Input('src') src: string;
  constructor() { }

  ngOnInit(): void {
  }

}
