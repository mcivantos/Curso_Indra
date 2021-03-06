import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { CommonsModule } from './commons/commons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ListacompraComponent } from './listacompra/listacompra.component';
import { AddelementsComponent } from './addelements/addelements.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IdeasComponent,
    NoticiaComponent,
    Formulario2Component,
    ListacompraComponent,
    AddelementsComponent
    
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  addElement(element: string){
    
  }

 }
