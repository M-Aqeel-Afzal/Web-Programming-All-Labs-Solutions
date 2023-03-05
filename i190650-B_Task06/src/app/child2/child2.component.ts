import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 //Receive from child
 @Input() currentMsgFromChild1ToChild2?: any [];
 //Send to Child
 @Output() msgToSibling = new EventEmitter<any>();
  
  name = 'Node: Child2';
  currentMsgToSibling = "Hi I'm Child2!";

  constructor() { }

  ngOnInit(): void {
  }
  msgToSib() {
    this.msgToSibling.emit(this.currentMsgToSibling);
  }

}
