import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';

import { Cliente } from '../cliente.model'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  id: Number;

  success: Boolean = false;
  errors: String[];

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params : Observable<Params> =  this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
          )
      }
    })
  }

  onSubmit() {
    console.log(this.cliente.name)
    this.service
      .save(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
  }

  back(){
    this.router.navigate(['/clientes-list']);
  }
}
