import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  icono: any;
  form: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
      texto: ['']
  });
  }

  public onFileChoosen(file: any) {
    this.icono = file; 
}


save(){
  console.log(this.form.value)

  /*this.client.post('comercio', object,[
    { name:'imagen', file: this.icono },
  ]).subscribe((data)=> {
    console.log(data);
    this.router.navigateByUrl('/tiendas/tienda');
      },
      error => {
        console.log(error);
      }
  );*/
}



}
