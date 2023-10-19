export default class Car{
    public readonly color;
    public readonly passengerCount;

    constructor(color: string, passengerCount: number){
      this.color = color;
      this.passengerCount = passengerCount;   
    };
}