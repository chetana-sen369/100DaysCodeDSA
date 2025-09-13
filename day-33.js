//100 Days Of Code
//Day-33
//Today’s Challenge – Task Manager with Singly Linked List 
// Imagine you’re building a Task Manager App where tasks are stored in a Singly Linked List. 
//  Requirements: 1. Add Task at End → Insert a new task at the end of the list. 
// 2. Add Task at Beginning → Insert a new task at the start of the list. 
// 3. Delete Task by Name → Remove the first occurrence of a task by its name. 
// 4. Delete Task by Position → Remove a task at a specific position (1-based index).
// 5. Show Tasks → Print the current list of tasks.
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
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    deleteByValue(val) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === val) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data == val) {
                current.next = current.next.next;
                if (current.next === null) {
                    this.tail = current;
                }
                break;
            } else {
                current = current.next;
            }
        }
    }
    deleteByPosition(pos) {
        if (this.head == null) {
            return;
        }
        if (pos === 1) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
                return;
            }
        }
        let current = this.head;
        for (let i = 1; i < pos - 1; i++) {
            if (current === null || current.next === null) {
                return;
            }
            current = current.next;
        }
        let nodeToDelete = current.next;
        if (nodeToDelete === null) {
            return;
        }
        current.next = nodeToDelete.next;
        if (current.next === null) {
            this.tail = current;
        }
    }
    PrintList() {
        let results = "";
        let current = this.head;
        while (current != null) {
            results += current.data + "->";
            current = current.next;
        }
        console.log(results + "null");
    }
}
let list = new LinkedList();
list.insertAtEnd("Finish Homework");
list.insertAtEnd("Buy Groceries");
list.insertAtBeginning("Morning Workout");
list.PrintList()
list.deleteByValue("Buy Groceries");
list.PrintList();
list.deleteByPosition(2);
list.PrintList()