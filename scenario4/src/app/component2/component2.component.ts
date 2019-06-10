import { Component, OnInit,Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-component2',
  template: `
  
    <button (click)="fireEvent()"> Send Event </button>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

 @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hello Angular');
  }
  
}
