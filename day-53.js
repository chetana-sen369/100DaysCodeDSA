//100 Days Of Code
//Day-53
// Today’s Challenge - Implement a Stack and Perform All Operations
// Implement Stack using Array or Linked List (your choice).
// 2. Perform the following operations:
// * Push: Add an element to the stack.
// * Pop: Remove the top element.
// * Peek/Top: View the top element without removing it.
// * Display: Print all elements of the stack.
// 3. Handle edge cases:
// Stack Overflow (if using fixed size array).
// Stack Underflow (when trying to pop from empty stack).

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
        this.max = 6;
    }

    push(element) {
        if (this.top === this.max - 1) {
            console.log("Stack is overflow");
        } else {
            this.top += 1;
            this.items[this.top] = element; 
            console.log("Pushed", element);
        }
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack is underflow");
        } else {
            console.log("Popped", this.items[this.top]);
            this.top -= 1;
        }
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
        } else {
            console.log("Top element:", this.items[this.top]);
        }
    }
    display() {
        if (this.top === -1) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements:");
            for (let i = this.top; i >= 0; i--) {
                console.log(this.items[i]);
            }
        }
    }
}

let stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.push(40);
stack.peek();
stack.display();