import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { VagasComponent } from './vagas/vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CurriculosComponent,
    VagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
