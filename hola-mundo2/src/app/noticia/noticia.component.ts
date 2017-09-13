import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  public mostrar: boolean;
  public botonShow: boolean;

  constructor() { this.ngOnInit() }

  ngOnInit() {
    this.mostrar = true;
    this.botonShow = false;
  }

  showNews(){
    this.mostrar = true;
    this.botonShow = false;
  }

  hiddenNews(){
    this.mostrar = false;
     this.botonShow = true;
  }
}
