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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TemplateModule,
    AppRoutingModule,
    ClientesModule,
    SupplyModule
  ],
  providers: [
    ClientesService,
    SupplyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
