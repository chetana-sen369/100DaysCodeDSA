//100 Days Of Code
//Day-28
//Topic: Linked List: You are given a singly linked list representing roll numbers of students. Implement the following rules:
//Insert a new student roll number at any given position.If position = 1 → insert at head.
//If position = length+1 → insert at tail.
//Otherwise → insert at that middle position.
//If the given position is invalid (<1 or > length+1), print "Invalid Position".
//If the roll number already exists, print "Duplicate Entry Not Allowed".
//After successful insertion, print the linked list.


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
    insertAtPosition(data, pos) {
        if (pos < 1) {
            console.log("Invalid Position");
            return;
        }
        //duplicate check
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === data) {
                console.log("duplicate entries not allowed");
                return;
            }
            temp = temp.next;
        }
        //creating new node
        const newNode = new Node(data);
        if (pos === 1) {               //insert at head
            newNode.next = this.head;
            this.head = newNode;
            if (this.tail === null) {
                this.tail = newNode;
            }
            return;
        }
        //traverse to pos-1
        let current = this.head;
        let count = 1;
        while (current !== null && count < pos - 1) {
            current = current.next;
            count++
        }
        if (current === null) {
            console.log("Invalid Position");
            return;
        }
        //insert node
        newNode.next = current.next;
        current.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }
    printList() {
        let result = "";
        let temp = this.head;
        while (temp !== null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";
        console.log(result);
    }
}
let list = new LinkedList();

list.insertAtPosition(1, 1);   // 1 -> null
list.insertAtPosition(2, 2);   // 1 -> 2 -> null
list.insertAtPosition(4, 3);   // 1 -> 2 -> 4 -> null
list.insertAtPosition(5, 4);   // 1 -> 2 -> 4 -> 5 -> null
list.printList();
list.insertAtPosition(3, 3);   // 1 -> 2 -> 3 -> 4 -> 5 -> null
list.insertAtPosition(5, 2);   // Duplicate Entry Not Allowed
list.insertAtPosition(10, 10); // Invalid Position
list.printList();