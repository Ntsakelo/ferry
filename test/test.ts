import assert from "assert";
import Ferry from "../src/Ferry";
import Car from "../src/Car";

describe("People count", ()=>{
    it("should be able to count the number of people in the ferry",() =>{
        const benz = new Car("black", 4, "CF 20001");
        
        const ferry = new Ferry(6, 6);
        
        ferry.board(benz);
        
        assert.equal(4,ferry.peopleCount);
    })
    
    it("should be able to count the number of people in the ferry",() =>{
        const bmw = new Car("Blue", 2, "CA 10000");
        const corolla = new Car("Red", 2, "GP 11111");
        const ferry = new Ferry(1,6);
        ferry.board(bmw);
        ferry.board(corolla);
        assert.equal(2,ferry.peopleCount);
    })
})
describe("Cars count", () => {
    it("should be able to count the number of cars in the ferry",()=>{
        const audi = new Car("Green", 4, "CJ 123111");
        const ferry = new Ferry(3,6);
        ferry.board(audi);
        assert.equal(1, ferry.carCount)
    })
    it("should be able to count the number of cars in the ferry",()=>{
        const audi = new Car("Green", 4, "L 123123");
        const taxi = new Car("yellow",15, "CY 123111");
        const polo = new Car("Silver", 2, "CL 111111");
        
        const ferry = new Ferry(3,6);
        ferry.board(audi);
        ferry.board(taxi);
        ferry.board(polo);
        assert.equal(2, ferry.carCount)
    })
})
describe("board method", () => {
    it("should return accepted if ferry is not full",() =>{
        const ferrarri = new Car("black", 2,"CA 111 111");
        const ferry = new Ferry(2,3);
        assert.equal("Accepted", ferry.board(ferrarri));

    })
    it("should return rejected if ferry has enough cars",() =>{
        const tazz = new Car("Brown", 4,"CA 111 111");
        const corolla = new Car("Red", 4, "CF 333-111");
        const ferrarri = new Car("Black", 2, "CA 441-000");
        
        const ferry = new Ferry(2,20);
        ferry.board(tazz);
        ferry.board(corolla);
        assert.equal("Rejected", ferry.board(ferrarri));

    })
    it("should return \"half price\" if car has more than 3 trips",() =>{
        const tazz = new Car("Brown", 4,"CA 111 111");
        const tazz1 =  new Car("Brown", 4,"CA 111 111");
        const tazz2 = new Car("Brown", 4,"CA 111 111");
        const tazz3 = new Car("Brown", 4,"CA 111 111");
        
        const ferry = new Ferry(5,20);
        ferry.board(tazz);
        ferry.board(tazz1);
        ferry.board(tazz2);
        assert.equal("Half price", ferry.board(tazz3));
    })
    it("should return \"you go free\" if car has more than 7 trips",() =>{
        const tazz = new Car("Brown", 4,"CA 111 111");
        const tazz1 =  new Car("Brown", 4,"CA 111 111");
        const tazz2 = new Car("Brown", 4,"CA 111 111");
        const tazz3 = new Car("Brown", 4,"CA 111 111");
        const tazz4 = new Car("Brown", 4,"CA 111 111");
        const tazz5 = new Car("Brown", 4,"CA 111 111");
        const tazz6 = new Car("Brown", 4,"CA 111 111");
        const tazz7 = new Car("Brown", 4,"CA 111 111");
        const ferry = new Ferry(10,50);
        ferry.board(tazz);
        ferry.board(tazz1);
        ferry.board(tazz2);
        ferry.board(tazz3);
        ferry.board(tazz4);
        ferry.board(tazz5);
        ferry.board(tazz6);
        assert.equal("You go free", ferry.board(tazz7));
    })
})
