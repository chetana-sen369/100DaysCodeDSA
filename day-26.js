// 100 Days Of Code 
// Day-26: Linked List Insertions
//Challenge: Linked List Insertions You are given a singly linked list. Implement the following operations:
//Insert at Head → Add a new node at the beginning of the list.
//Insert at Tail → Add a new node at the end of the list.
//Insert at Position → Add a new node at a given 1-based position pos.
//If pos = 1, insert at the head.
//If pos = length + 1, insert at the tail.
//If pos is greater than the length + 1, handle it gracefully.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

    }

    insertAtTail(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insertAtPosition(data, pos) {
    if(pos <1){
        console.log("Invalid position (position start at 1)");
        return;
    }


        let newNode = new Node(data);

        if (pos === 1) {
            this.insertAtHead(data);
            return;
        }

        let temp = this.head;
        let count = 1;

        while (temp !== null && count < pos - 1) {
            temp = temp.next;
            count++;
        }

        if (temp === null) {
            console.log("Position out of range");
            return;
        }

        newNode.next = temp.next;
        temp.next = newNode;

        if (temp == this.tail) {
            this.tail = newNode;
        }
    }

    printList() {
        let result = "";
        let temp = this.head;
        while (temp != null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";
        console.log(result);
    }
}

// Test
let list = new LinkedList();
list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtPosition(15, 2);
list.insertAtPosition(5, 1);
list.insertAtPosition(25, 5);
list.insertAtPosition(100, 10);

list.printList();  // Expected: 5 -> 10 -> 15 -> 20 -> 25 -> null
