import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  public idea: string;
  public aIdeas: Array<string>;

  constructor() {
    this.ngOnInit();
   }

  ngOnInit() {
    this.aIdeas = [];
  }

  addIdeas(){
    this.aIdeas.push(this.idea);
  }

}
