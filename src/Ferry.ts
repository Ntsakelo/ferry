import Car from "./Car";

export default class Ferry{
    public readonly carsLimit;
    public readonly passengerLimit;
    public readonly carColors: Array<string> = [];
    public readonly carRegs: Array<string> =[];
    private people_count= 0;
    private car_count = 0;

   public get peopleCount(){
      return this.people_count;  
    }
  
  public get carCount() {
    return this.car_count;
  }  
  public get carRegList(){
    return this.carRegs
  }
  public regCount(reg:string){
   let count = 0;
   for(let i = 0; i < this.carRegs.length; i++){
       if(reg === this.carRegs[i]){
         count++;
       }
      }
      return count;
  }
    constructor(carsLimit: number, passengerLimit: number){
        this.carsLimit = carsLimit;
        this.passengerLimit = passengerLimit;     
    };

    public board(car: Car) {
      if(this.carCount >= this.carsLimit || this.peopleCount + car.passengerCount > this.passengerLimit){
        return "Rejected";
      }
      else{
        this.carColors.push(car.color);
        this.carRegs.push(car.registration);
        this.car_count += 1;
        this.people_count += car.passengerCount;
        let regCount = this.regCount(car.registration);
        //console.log(regCount);
        if(regCount > 3 && regCount < 7){
          return "Half price"
        }
       if(regCount > 7){
          return "You go free"
        }
         if(regCount < 3){
          return "Accepted";
        }
     }
    }
}