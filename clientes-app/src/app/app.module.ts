import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './services/clientes.service';
import { SupplyModule } from './supply/supply.module';
import { SupplyService } from './services/supply.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TemplateModule,
    AppRoutingModule,
    ClientesModule,
    SupplyModule,
  ],
  providers: [
    ClientesService,
    SupplyService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
