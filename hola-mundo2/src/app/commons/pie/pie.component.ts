import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public usuario: string;
  public curso: string;

  constructor() {
    this.ngOnInit();
   }

  ngOnInit() {
    this.usuario = "María Civantos";
    this.curso = "Angular 2.0";
  }

}
