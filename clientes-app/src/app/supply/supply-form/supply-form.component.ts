import { Component, OnInit } from '@angular/core';
import { SupplyService } from 'src/app/services/supply.service';
import { Cliente } from '../../clientes/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { Supply } from '../supply.model';

@Component({
  selector: 'app-supply-form',
  templateUrl: './supply-form.component.html',
  styleUrls: ['./supply-form.component.css']
})
export class SupplyFormComponent implements OnInit {

  clientes: Cliente[];
  supply: Supply;

  constructor(private clienteService: ClientesService, private supplyService: SupplyService) {
    this.supply = new Supply();
   }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response);

  }

  onSubmit(){
    this.supplyService.save(this.supply).subscribe( response => {
      console.log(response)
    })
  }

}
