import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { path: 'customer', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'form', component: ClientesFormComponent},
    { path: 'form/:id', component: ClientesFormComponent},
    { path: 'list', component: ClientesListComponent},
    { path: '', pathMatch: 'full', redirectTo: '/customer/list',}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
