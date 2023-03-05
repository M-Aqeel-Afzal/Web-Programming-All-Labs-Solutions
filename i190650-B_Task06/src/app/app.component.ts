import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';

  //data To Child
  fruits = "Hello I'm your parent";
  public Hellovariable: number = 0;
  public FirstName: string = 'Aqeel';
  public LastName: string = 'Afzal';
  public Siblings =  ['Sibling 1', 'Sibling 2', 'Sibling 3'];
  
  //data from child to display
  valueEmittedFromChildComponent: string = '';

  msgFromChild1: any;
  currentMsgToChild1 = '';
  currentMsgToChild2 = 'I\'m coming!';
  currentMsgFromChild1ToChild2 : any;
  currentMsgFromChild2ToChild1 : any;
  msg: any;


  ngOnInit(): void
  {


  }
 //data from child to display
  parrentEventHandlerFunction(valueEmitted: string){
    this.valueEmittedFromChildComponent = valueEmitted;
   }

   //Sibling communication
  fwdMsgToSib1($event: any) {
    this.currentMsgFromChild2ToChild1 = $event;
  }

//Sibling communication
  fwdMsgToSib2($event: any) {
    this.currentMsgFromChild1ToChild2 = $event;
  }
}
