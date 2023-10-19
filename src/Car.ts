export default class Car{
    public readonly color;
    public readonly passengerCount;
    public readonly registration

    constructor(color: string, passengerCount: number, registration: string){
      this.color = color;
      this.passengerCount = passengerCount;   
      this.registration = registration;
    };
}