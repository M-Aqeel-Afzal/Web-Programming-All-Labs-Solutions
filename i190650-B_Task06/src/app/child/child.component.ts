import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Receving data from parent
  @Input() data?: string;
  @Input() firstName?: string;
  @Input() lastName?: string;
  @Input() fruits?: string[];
  
  //Sending data to parent
  @Output() buttonClicked :EventEmitter<string>=new EventEmitter<string>();
  
   //Sending data to siblings
   name = 'Node: Child1';
  @Input() currentMsgFromChild2ToChild1?: any[] ;
  @Output() msgToSibling = new EventEmitter<any>();

  public currentMsgToSibling = "Hi I'm parent";
  constructor() { }

  ngOnInit(): void {
  }

  //Sending data to parent
  clickButton()
  {
    this.buttonClicked.emit("Hi I'm Child1");
  }
  //send data to sibling
  msgToSib() {
    this.msgToSibling.emit(this.currentMsgToSibling);
  }

}
