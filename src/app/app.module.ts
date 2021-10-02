import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaListagemComponent } from './marca-listagem/marca-listagem.component';
import { MarcaDetalheComponent } from './marca-detalhe/marca-detalhe.component';


import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
//import { EssenciaComponent } from './essencia/essencia.component';
import { EssenciaDetalheComponent } from './essencia-detalhe/essencia-detalhe.component';
import { EssenciaListarComponent } from './essencia-listar/essencia-listar.component';
import { PerfumeDetalheComponent } from './perfume-detalhe/perfume-detalhe.component';
import { PerfumeListarComponent } from './perfume-listar/perfume-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaListagemComponent,
    MarcaDetalheComponent,
    //EssenciaComponent,
    EssenciaDetalheComponent,
    EssenciaListarComponent,
    PerfumeDetalheComponent,
    PerfumeListarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
