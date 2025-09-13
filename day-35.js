//100 Days Of Code
//Day-35
//Today’s Challenge - Photo Gallery Viewer (DLL Insertions & Traversal) Imagine you’re building a Photo Gallery App where each photo is linked to the previous and next photo.
//A Doubly Linked List is the perfect structure for this! 
// Requirements: 1. Add Photo at End → Insert a new photo into the gallery (at the end). 
// 2. Add Photo at Beginning → Insert a new photo at the start. 
// 3. View Gallery Forward → Traverse forward to display photos in order. 
// 4. View Gallery Backward → Traverse backward to display photos in reverse order.
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addPhotoAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    addPhotoAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    forward() {
        let results = "";
        let current = this.head;
        while (current != null) {
            results += current.data + "->";
            current = current.next;
        }
        console.log(results + "null");
    }
    backward() {
        let results = "";
        let current = this.tail;
        while (current != null) {
            results += current.data + "->";
            current = current.prev;
        }
        console.log(results + "null");
    }
}
let list = new doublyLinkedList();
list.addPhotoAtEnd("P1");
list.addPhotoAtEnd("P2");
list.addPhotoAtBeginning("P0");
list.forward()
list.backward();