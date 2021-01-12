import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { NoticiasService  } from 'src/app/services/noticias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  
  currentDate: Date;
  image: string;
  image2: any;
  form: FormGroup;
  files:string  []  =  [];
  name:string;

  constructor( private fb: FormBuilder,private noticia:NoticiasService,   private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
      descripcion: [''],
      file: ['']
  });
  this.currentDate = new Date();
  console.log(this.currentDate);
  }

  public onFileChoosen(event) {
    for  (var i =  0; i < event.target.files.length; i++)  {  
      this.files.push(event.target.files[i]);
  }
    this.image2 = this.files[0];
    this.name = this.image2.name;
}


save(){
  const fd = new FormData();
  for  (var i =  0; i <  this.files.length; i++)  {  
    fd.append("file[]",  this.files[i]);    
   } 

   this.noticia.upfile(fd).subscribe((response) => {
  console.log(response);
  this.router.navigate(['/noticias']);
}
);
  
  const object: any = {
    titulo : this.form.value.titulo,
    imagen : this.name,
    descripcion:  this.form.value.descripcion,
    fecha: this.currentDate.toString()
  }
  console.log(object);
  this.noticia.addNews(object).subscribe((response) => {
    console.log(response);
    this.router.navigate(['/noticias']);
  },
  error => {
    console.log(error);
  }
  );

}


}
