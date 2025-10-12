//100 Days Of Code
//Day-54
//Today’s Challenge - Check for Balanced Parentheses

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
        this.max = 10;
    }

    push(element) {
        if (this.top === this.max - 1) {
            console.log("Stack is overflow");
        } else {
            this.top += 1;
            this.items[this.top] = element;
        }
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack is underflow");
            return null;
        } else {
            let popped = this.items[this.top];
            this.top -= 1;
            return popped;
        }
    }

    peek() {
        if (this.top === -1) {
            return null;
        } else {
            return this.items[this.top];
        }
    }

    isEmpty() {
        return this.top === -1;
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

    paranthesisChecker(expression) {
        const bracketPairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        const checkerStack = new Stack();

        for (let char of expression) {
            if (char === '(' || char === '{' || char === '[') {
                checkerStack.push(char);
            } else if (char === ')' || char === '}' || char === ']') {
                if (checkerStack.isEmpty() || checkerStack.peek() !== bracketPairs[char]) {
                    return "Invalid";
                }
                checkerStack.pop();
            }
        }

        return checkerStack.isEmpty() ? "Valid" : "Invalid";
    }
}


let stack = new Stack();
console.log(stack.paranthesisChecker("()[]{}"));      
console.log(stack.paranthesisChecker("(]"));          
console.log(stack.paranthesisChecker("{[()]}"));      
console.log(stack.paranthesisChecker("{[}]"));        
console.log(stack.paranthesisChecker("({[]})"));      