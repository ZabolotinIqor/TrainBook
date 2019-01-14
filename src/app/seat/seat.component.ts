import { Component, OnInit, Input } from '@angular/core';
import { Seat } from '../models/seat';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input()
  condition: String;

  @Input()
  place:String;


  constructor(config: NgbTooltipConfig) {

   }

  ngOnInit() {

  }

  getCondition(){
    console.log(this.condition);
    return this.condition;
  }

}
