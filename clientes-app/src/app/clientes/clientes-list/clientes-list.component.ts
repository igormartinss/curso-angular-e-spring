import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelected: Cliente;

  successMessage: String;
  errorMessage: String; 

  constructor(
    private service : ClientesService,
    private router: Router) {
    
  }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( response => this.clientes = response)
  }

  newCustomer() {
    this.router.navigate(['/customer/form']);
  }

  prepareDelete(cliente: Cliente) {
    this.clienteSelected = cliente;
    console.log(this.clienteSelected)
  }

  confirmDelete(){
    this.service.delete(this.clienteSelected)
      .subscribe( response => {
        this.successMessage = "Cliente foi deletado",
        error => this.errorMessage = "Ocorreu um erro ao deletar o cliente"
      })
  }

}
