//100 Days Of Code
//Day-41
// Requirements:
//1. Insert Player at End → Add a new player at the end of the circle.
//2. Insert Player at Beginning → Add a new player at the start of the circle.
//3. Traverse Forward → Print the players in circular order (stop once you complete one full cycle).
//4. Traverse Multiple Rounds → Print players for k rounds to simulate the game cycling.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class circularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertPlayerAtBegining(player) {
        let newNode = new Node(player);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.size++;
        return;
    }
    insertPlayerAtEnd(player) {
        let newNode = new Node(player);
        if (!this.tail) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        this.size++;
        return;
    }
    traverseForward() {
        let result = [];
        if (!this.head) return result;
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head)
        return result;
    }
    traverseMultipleRounds(k) {
        const result = [];
        if (!this.head) return result;
        let current = this.head;
        for (let i = 0; i < k * this.size; i++) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

const players = new circularLinkedList();
players.insertPlayerAtEnd("Alice");
players.insertPlayerAtEnd("Bob");
players.insertPlayerAtEnd("Charlie");
players.insertPlayerAtBegining("Zara");
console.log(players.traverseForward().join("->"));
console.log(players.traverseMultipleRounds(2).join("->"));
