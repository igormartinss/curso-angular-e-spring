import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplyFormComponent } from './supply-form/supply-form.component';
import { SupplyListComponent } from './supply-list/supply-list.component';

const routes: Routes = [
  {path: 'supply-form', component: SupplyFormComponent},
  {path: 'supply-list', component: SupplyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyRoutingModule { }
