//100 Days Of Code
//Day-36
//Today’s Challenge - Design a Playlist Manager (DLL Insertions & Traversal) 
//Requirements:
//1. Add Song at Head → Insert a new song at the beginning.
//2. Add Song at Tail → Insert a new song at the end.
//3. Add Song at Index → Insert a song at a specific position (0-based index).
//4. Show Playlist Forward → Print songs from head to tail.
//5. Show Playlist Backward → Print songs from tail to head.


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
    addHead(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    addTail(data) {
        const newNode = new Node(data);
        if (this.tail === null) {
            this.tail = this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    addAtIndex(song, index) {
        if (index === 0) {
            this.addHead(song);
            return;
        }
        let current = this.head;
        let count = 0;
        while (current != null && count < index - 1) {
            current = current.next;
            count++;
        }
        if (current === null) {
            this.addTail(song);
        } else if (current != null) {
            const newNode = new Node(song);
            newNode.next = current.next;
            newNode.prev = current;

            if (current.next !== null) {
                current.next.prev = newNode;
            }else{
                this.tail=newNode;
            }
            current.next = newNode;
        }
    }
    showForward() {
        let results = "";
        let current = this.head;
        while (current != null) {
            results += current.data + "->";
            current = current.next;
        }
        console.log(results + "null");
    }
    showBackward() {
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
list.addHead("songA");
list.addTail("songB");
list.addTail("songC");
list.addAtIndex("songX", 1);
list.showForward();
list.showBackward();


