import { Component, OnInit } from '@angular/core';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-carriege',
  templateUrl: './carriege.component.html',
  styleUrls: ['./carriege.component.css']
})
export class CarriegeComponent implements OnInit {
  id: 1;
  seatList: Seat[];
  condition:string;
  place:string;
  width;
  height;

  constructor() {
    this.width = Array(40);
    this.height = Array(90);
    this.seatList = [new Seat(1, '15-B', 'free', 1,5,16),
                     new Seat(2, '15-A', 'busy', 1,8,9),
                     new Seat(3, '15-C', 'tmp-booked', 1,3,15),
                     new Seat(4, '18-B', 'int-booked', 1,15,3),
                     new Seat(5, '27-G', 'conditionally-closed', 1,2,17),
                     new Seat(6, '13-F', 'closed', 1,32,18),
                     new Seat(7, '13-V', 'enc-closed', 1,20,16),
                     new Seat(8, '15-J', 'for-offline-ticket', 1,18,19),
                     new Seat(9, '157-BC', 'free', 1,5,5)];
  }

  ngOnInit() {
  }

  checkCoordinates(x:any,y:any):boolean{


    for (let index = 0; index < this.seatList.length; index++) {
      if(this.seatList[index].positionX==x&&this.seatList[index].positionY==y){
        console.log("x: "+this.seatList[index].positionX+" y: "+this.seatList[index].positionY + " condition :" +this.seatList[index].Condition);
        this.condition=this.seatList[index].Condition;
        this.place=this.seatList[index].Number;
        return true;
      }

    }
    this.condition='none';
    return false;
  }

}
