import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  save(cliente: Cliente) : Observable<Cliente> {    
    if(!cliente.id){
      return this.http.post<Cliente>('http://localhost:8080/api/customers', cliente);
    } else {
      return this.http.put<Cliente>(`http://localhost:8080/api/customers/${cliente.id}`, cliente);
    }
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/customers');
  }

  getClienteById(id: Number) : Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8080/api/customers/${id}`);
  }

  delete(cliente: Cliente){
    return this.http.delete<any>(`http://localhost:8080/api/customers/${cliente.id}`);
  }
}
