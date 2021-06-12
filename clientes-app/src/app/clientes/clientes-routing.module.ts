import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { path: 'customer', component: LayoutComponent, children: [
    { path: 'form', component: ClientesFormComponent},
    { path: 'form/:id', component: ClientesFormComponent},
    { path: 'list', component: ClientesListComponent},
    { path: '', pathMatch: 'full', redirectTo: '/customer/list'}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
