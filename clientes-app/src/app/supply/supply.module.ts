import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyFormComponent } from './supply-form/supply-form.component';
import { SupplyListComponent } from './supply-list/supply-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SupplyFormComponent,
    SupplyListComponent
  ],
  imports: [
    CommonModule,
    SupplyRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    SupplyFormComponent,
    SupplyListComponent
  ]
})
export class SupplyModule { }
