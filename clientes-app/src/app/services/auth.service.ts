import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../login/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURL + "/api/users";

  constructor(
    private http: HttpClient
  ) { }

  saveUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiURL, user);
  }
}

