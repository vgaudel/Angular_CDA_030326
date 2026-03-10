import { Injectable } from '@angular/core';
import { ISpaceNewsArticle } from '../ISpacesNewsArticle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SpaceNewsService {

  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.spaceflightnewsapi.net/v4/articles';
  
  getNews() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getNewsWithOffset(offset: number){
    return this.http.get<any>(this.baseUrl+"/?offset="+offset);
  }

}
