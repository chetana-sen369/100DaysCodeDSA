//100 Days Of Code
//Day-55
//Today’s Challenge - Next Greater Element

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

    findNextGreater(arr) {
        console.log("Input:", arr);
        
        const result = new Array(arr.length).fill(-1);
        
        for (let i = 0; i < arr.length; i++) {
            while (!this.isEmpty() && arr[i] > arr[this.peek()]) {
                const index = this.pop();
                result[index] = arr[i];
            }
            this.push(i);
        }

        console.log("Output:", result);
        console.log("\n")
        return result;
    }
}


const greater = new Stack();
greater.findNextGreater([4, 5, 2, 25]);     
greater.findNextGreater([13, 7, 6, 12]);    
greater.findNextGreater([23, 1, 12, 33, 26]); 
greater.findNextGreater([2, 5, 6, 8, 10]);    

