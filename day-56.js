//100 Days Of Code
//Day-56
//Today’s Challenge - Daily Temperatures
//Requirements:
//1. Implement using a stack (no nested loops).
//2. The stack will keep indices of days, not temperatures.
//3. Traverse array once (O(n)):
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    
    calculate(temperatures){
        const result= new Array(temperatures.length).fill(0);
        console.log("Temperatures:",temperatures);
        for(let i=0;i<temperatures.length;i++){
           while (!this.isEmpty() && temperatures[i] > temperatures[this.peek()]) {
                const prevIndex=this.pop();
                result[prevIndex]=i-prevIndex;
            }
            this.push(i);
        }
        console.log("Days to wait for next Warmer day:",result);
        return result;
    }
}
const tempChecker=new Stack();
tempChecker.calculate([45,38,50,74,69,72,76]);
tempChecker.calculate([73,74,75,71,69,72,76,73]);
tempChecker.calculate([30,40,50,60]);
