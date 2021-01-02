import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-busiframe',
  templateUrl: './busiframe.component.html',
  styleUrls: ['./busiframe.component.css']
})
export class BusiframeComponent implements OnInit {
  @Input() url: string;
  @Input() src: string;
  @Input() title: string;
  urlSafe:SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    //this.urlSafe= this.url;
  }

}
