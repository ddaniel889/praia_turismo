import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable, of} from  'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Assist365Service {

  assist = "http://preapp.assist-365.com/api/";

  constructor(private http: HttpClient) { }


  getAssits(url:string):Observable<any>{
    return this.http.get<any[]>(this.assist+url).pipe(
      map( (resp: any) => {
      return resp;
      } )
    );
   }

  postAssits(url:string, data:string):Observable<any>{
    return this.http.post<any[]>(this.assist+url, data).pipe(
      map(this.parseResponse),
      catchError(this.handleError<any>())
  );
   } 

   protected parseResponse(r: any): any {
    if (r.success !== true) {
        throw new Error(r.message);
    }
    return r.data;
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
  };
}


}
