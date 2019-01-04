export class Seat {
  Id: number;
  Number: string;
  Condition: string;
  carriegeId: number;
  positionX:number;
  positionY:number;

  constructor(Id: number, Number: string, Condition: string, carriegeId: number, positionX:number, positionY:number) {
    this.Id = Id;
    this.Number = Number;
    this.Condition = Condition;
    this.carriegeId = carriegeId;
    this.positionX= positionX;
    this.positionY= positionY;
  }
}
