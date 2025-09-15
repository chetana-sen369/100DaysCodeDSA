//100 Days Of Code
//Day-37
//Today’s Challenge - Music Playlist Editor (DLL Insertions, Deletions & Traversal)
//Requirements:
//1. Add Song at Head → Insert a new song at the beginning.
//2. Add Song at Tail → Insert a new song at the end.
//3. Add Song at Index → Insert a song at a specific position (0-based index).
//4. Delete Song at Head → Remove the first song.
//5. Delete Song at Tail → Remove the last song.
//6. Delete Song at Index → Remove the song at a specific position.
//7. Show Playlist Forward → Traverse from head to tail.
//8. Show Playlist Backward → Traverse from tail to head.

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
    insertAtHead(song) {
        const newNode = new Node(song);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    insertAtTail(song) {
        const newNode = new Node(song);
        if (this.tail === null) {
            this.tail = this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    insertAtIndex(song, index) {
        if (index === 0) {
            this.insertAtHead(song);
            return;
        }
        let current = this.head;
        let count = 0;
        while (current != null && count < index - 1) {
            current = current.next;
            count++;
        }
        if (current === null) {
            this.insertAtTail(song);
        } else if (current != null) {
            const newNode = new Node(song);
            newNode.next = current.next;
            newNode.prev = current;

            if (current.next !== null) {
                current.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            current.next = newNode;
        }
    }
    deleteHead() {
        if (!this.head) return;
        let current = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            current.next.prev = null;
            this.head = current.next;
            current.next = null;
        }
    }
    deleteTail() {
        if (!this.tail) return;
        let temp = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
    }
    deleteByPosition(index) {
        if (index <= 0 || !this.head) return;
        let current = this.head;
        let count = 0;
        while (current && count < index) {
            current = current.next;
            count++;
        }
        if (!current) {
            console.log("position out of range");
        }
        if (current === this.head) {
            this.deleteHead();
        } else if (current === this.tail) {
            this.deleteTail();
        } else {
            let temp = current.prev;
            temp.next = current.next;
            current.next.prev = temp;

            //we will delink it completely
            current.next = null;
            current.prev = null;
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
list.insertAtHead("songA");
list.insertAtTail("songB");
list.insertAtTail("songC");
list.showForward();
list.insertAtIndex("songX", 1);
list.showForward();
list.deleteByPosition(2);
list.showForward();
list.showBackward();
list.deleteHead();
list.deleteTail();
list.showForward();