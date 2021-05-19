import { Component, OnInit } from '@angular/core';
import { SupplyService } from 'src/app/services/supply.service';
import { Supply } from '../supply.model';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {

  name: string;
  message: string;
  supplies: Supply[];

  constructor(private service: SupplyService) { }

  ngOnInit(): void {
  }

  search() {
    this.service.search(this.name).subscribe(response => {
      this.supplies = response;
      console.log(this.supplies);
      if(this.supplies.length <= 0) {
        this.message = "Nenhum registro";
      } else {
        this.message = null;
      }
    })
  }
}
