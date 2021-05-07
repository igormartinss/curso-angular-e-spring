import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supply } from '../supply/supply.model';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  apiURL: string = environment.apiURL + '/api/supplies';

  constructor(private http: HttpClient) { }

  save(supply: Supply): Observable<Supply>{
    return this.http.post<Supply>(this.apiURL, supply);
  }
}
