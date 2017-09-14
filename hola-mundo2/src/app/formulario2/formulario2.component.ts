import { Component, OnInit } from '@angular/core';

interface Provincia{
  idProvincia: String,
  nombre: String
};

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  public resultado: boolean;
  public tono: boolean;
  public provincias: Array<Provincia>;
  public provinciaSeleccionada: Provincia;

  constructor() { 
    this.ngOnInit();
  }

  ngOnInit() {
    this.resultado = false;
    this.tono = false;
    this.provincias = [
      {idProvincia:"1",nombre:"Jaén"},
      {idProvincia:"2",nombre:"Alicante"},
      {idProvincia:"3",nombre:"Madrid"},
      {idProvincia:"4",nombre:"Cádiz"}
    ];
    this.provinciaSeleccionada = null;
  }

}
