//100 Days Of Code
//Day-42
//Requirements:
// Given a sorted circular linked list, implement a function insert(head, insertVal) which inserts insertVal in the right position so the list stays sorted.
//If the list is empty (head is null), create a new node with insertVal that points to itself.
//After inserting, traverse the full circular list from the insertion point (or any reference point) to print all the node values in order until you come back to the starting node.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class circularLinked {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

     insertAtHead(data) {

    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }
  
  traverse(){
    let result = [];
    if (!this.head) return result;
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    }
    while (current !== this.head);
    return result;
  }

  traverseFrom(node) {
    if (!node) return;
    let current = node;
    const result = [];
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== node);
    console.log(result.join(" -> ") + " -> " + node.data);
  }
}

const numbers = new circularLinked();
numbers.insertAtHead(2)
numbers.insertAtHead(1)
numbers.insertAtHead(5);
numbers.insertAtTail(3);
numbers.insertAtTail(4);
numbers.traverseFrom(numbers.head);
numbers.traverseFrom(numbers.tail);


let position =2;
let current=numbers.head;
for(let i=0;i<position;i++){
  current=current.next
}
numbers.traverseFrom(current)