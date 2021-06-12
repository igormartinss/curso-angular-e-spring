import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SupplyFormComponent } from './supply-form/supply-form.component';
import { SupplyListComponent } from './supply-list/supply-list.component';

const routes: Routes = [
  { path: 'supply', component: LayoutComponent, children: [
    { path: 'form', component: SupplyFormComponent},
    { path: 'list', component: SupplyListComponent},
    { path: '', pathMatch: 'full', redirectTo: '/supply/list'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyRoutingModule { }
