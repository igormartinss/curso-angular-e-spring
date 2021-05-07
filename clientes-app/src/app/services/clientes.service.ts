import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURL + '/api/customers';

  constructor(private http: HttpClient) { }

  save(cliente: Cliente) : Observable<Cliente> {    
    if(!cliente.id){
      return this.http.post<Cliente>(this.apiURL, cliente);
    } else {
      return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
    }
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id: Number) : Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }

  delete(cliente: Cliente){
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
