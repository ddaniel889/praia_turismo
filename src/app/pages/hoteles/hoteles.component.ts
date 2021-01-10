import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {map, startWith} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  public form: FormGroup;
  private REST_API_SERVER = "http://localhost:3000/products";
  list:boolean = false;
  view:boolean = false;
  detail:boolean = false;

  constructor(private httpClient: HttpClient, public fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
   // this.propertyList()
    this.form = this.fb.group({
      localidad: ['']
  });
  this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  

  protected getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      "x-rapidapi-key": "163fc0b8e1msh1123ed9c606536bp19694bjsna6c931a85ddc",
      "x-rapidapi-host": "hotels4.p.rapidapi.com"
    });
  
    return headers;
}

  propertyList():any {
    //body totalCount results
    this.view = true;
  const url = "https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE";
  return this.httpClient.get( url,{
    headers: this.getHeaders()
}).subscribe( response => {
    console.log(response)
    
    }
  );
}

getMetaData():any {
  //local metadata devuelve los países donde posee información
  console.log('meta')
  /*fetch("https://hotels4.p.rapidapi.com/get-meta-data", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "163fc0b8e1msh1123ed9c606536bp19694bjsna6c931a85ddc",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/

}

getDetails():any {
  //ver detalle de un hotel por id
  console.log('getDetails')
  this.detail = true;
  const url = "https://hotels4.p.rapidapi.com/locations/search?query=rio%20de%20janeiro&locale=en_US";
  return this.httpClient.get( url,{
    headers: this.getHeaders()
}).subscribe( response => {
    console.log(response)
    
    }
  );

}

getHotelPhotos():any {
  console.log('getHolelPhoto')
  //solo las fotos de un hotel individual id
  /*fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "163fc0b8e1msh1123ed9c606536bp19694bjsna6c931a85ddc",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/

}

getSearch():any {
  //busqueda por localidad 0 para el codigo de ciudad y 3 para los hoteles
  console.log('getHolelPhoto')
  this.list = true;
  const url = "https://hotels4.p.rapidapi.com/locations/search?query=rio%20de%20janeiro&locale=en_US";
  return this.httpClient.get( url,{
    headers: this.getHeaders()
}).subscribe( response => {
    console.log(response)
    
    }
  );

}

}

