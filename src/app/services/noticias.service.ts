import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from "../model/news";
import { environment } from "../../environments/environment";
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {

    

   }

   getNews():Observable<News[]>{
    return this.http.get<News[]>(`${this.baseUrl}/getNews.php`);
   }

   addNews(a: string): Observable<News[]> {
     return this.http.post<News[]>(`${this.baseUrl}/postNews.php`, a);
   }

   upfile(a: FormData): Observable<News[]> {
    return this.http.post<News[]>(`${this.baseUrl}/upload.php`, a);
  }
}
