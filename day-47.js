//100 Days Of Code
//Day-47
//Today’s Challenge - Modify Circular Linked List (Insertion, Deletion & Traversal)
//👉 Requirements:
//1. insert(value) → Insert a new process ID into the list in sorted order.
//2. delete(value) → Remove one occurrence of a given process ID if it exists.
//3. traverse() → Display all process IDs in the scheduler by traversing the circular list once.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Insertion at Head
  insertAtHead(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  // Insertion at Tail
  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  // Traverse only once
  traverse() {
    let result = [];
    if (!this.head) return result;
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    return result;
  }

  // Insertion at Position (1-based index)
  insertAtPosition(data, pos) {
    if (pos < 1 || pos > this.size + 1) {
      console.log("Invalid position");
      return;
    }
    if (pos === 1) {
      this.insertAtHead(data);
      return;
    }
    if (pos === this.size + 1) {
      this.insertAtTail(data);
      return;
    }

    let newNode = new Node(data);
    let current = this.head;
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  // Insert in the Sorted Order
  insertSorted(value) {
    if (!this.head || value < this.head.data) {
      this.insertAtHead(value);
      return;
    }
    if (value >= this.tail.data) {
      this.insertAtTail(value);
      return;
    }

    let newNode = new Node(value);
    let current = this.head;
    while (current.next !== this.head && current.next.data < value) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  // Deleting a value
  deleteValue(value) {
    if (!this.head) return; // when  list is empty

    // Case 1: Single node
    if (this.head === this.tail && this.head.data === value) {
      this.head = this.tail = null;
      this.size--;
      return;
    }

    // Case 2: Deleteing head
    if (this.head.data === value) {
      this.tail.next = this.head.next;
      this.head = this.head.next;
      this.size--;
      return;
    }

    // Case 3: Delete middle or tail
    let current = this.head;
    while (current.next !== this.head && current.next.data !== value) {
      current = current.next;
    }

    if (current.next.data === value) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
      this.size--;
    }
  }
}


let circular = new CircularLinked();

circular.insertSorted(3);
circular.insertSorted(1);
circular.insertSorted(2);
console.log(circular.traverse()); 

circular.insertSorted(0);
console.log(circular.traverse()); 

circular.deleteValue(2);
console.log(circular.traverse()); 

circular.deleteValue(5);
console.log(circular.traverse());