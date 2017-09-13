import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PieComponent, CabeceraComponent],
  export: [
    PieComponent, 
    CabeceraComponent
  ]
})
export class CommonsModule { }
