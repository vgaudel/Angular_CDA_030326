import { Injectable } from '@angular/core';
import { User } from '../data/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface UsersApiResponse {
  users : User[];
}

interface USerApiResponse {
  user : User;
}

@Injectable({
  providedIn: 'root',
})
export class UsersRestService {

  constructor(private http: HttpClient) {}

  public baseUrl : string = "https://express-api-rest-production.up.railway.app/users-aboubacar";

  getAllUsers() : Observable<UsersApiResponse> {
    return this.http.get<UsersApiResponse>(this.baseUrl);
  }

}
