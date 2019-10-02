import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportadoraComponent } from './transportadora/transportadora.component';
import { TransportadoraPesquisaComponent } from './transportadora-pesquisa/transportadora-pesquisa.component';
import { TransportadoraEditarComponent } from './transportadora-editar/transportadora-editar.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TransportadoraComponent,
    TransportadoraPesquisaComponent,
    TransportadoraEditarComponent,
    MensagemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
