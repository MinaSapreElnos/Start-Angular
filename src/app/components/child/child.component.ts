import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  constructor(){
    console.log('constructor')
  }
 ngOnChanges(changes: SimpleChanges): void {
   console.log('mina')
 }
  @Input() child:string=''

}


