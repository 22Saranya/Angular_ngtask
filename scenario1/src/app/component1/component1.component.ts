import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <h2>
   welcome{{name}}
   </h2>
   <input #myId type ="text">
   <button (click)="onClick(myId.value)">log</button>
  
  `,
  styleUrls: []
})
export class Component1Component implements OnInit {

  public name ="Stack Route";
  public myId="componentId";
  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    console.log(value);
       
  }

}
