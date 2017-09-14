import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addelements',
  templateUrl: './addelements.component.html',
  styleUrls: ['./addelements.component.css']
})
export class AddelementsComponent implements OnInit {
  public elemento: string;

  @Output()
  addElement = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

}
