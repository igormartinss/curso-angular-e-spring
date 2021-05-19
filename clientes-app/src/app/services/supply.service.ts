import { HttpClient, HttpParams } from '@angular/common/http';
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
    console.log(supply);
    return this.http.post<Supply>(this.apiURL, supply);
  }

  search(name: string): Observable<Supply[]> {
    const httpParams = new HttpParams();
    name == null ?  httpParams.set("name", "") : httpParams.set("name",name);
    const url = this.apiURL + httpParams.toString();
    return this.http.get<any>(url);
  }
}
