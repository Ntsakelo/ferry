import Car from "./Car";

export default class Ferry{
    public readonly carsLimit;
    public readonly passengerLimit;
    
    private people_count= 0;
    private car_count = 0;

   public get peopleCount(){
      return this.people_count;  
    }
  
  public get carCount() {
    return this.car_count;
  }  
    constructor(carsLimit: number, passengerLimit: number){
        this.carsLimit = carsLimit;
        this.passengerLimit = passengerLimit;     
    };

    public board(car: Car) {
      if(this.carCount < this.carsLimit && this.peopleCount < this.passengerLimit){
        this.car_count++;
        this.people_count = car.passengerCount;
        return "Accepted";
      }
     else if(this.carCount >= this.carsLimit) {
        return "Rejected";
     }
    }
}