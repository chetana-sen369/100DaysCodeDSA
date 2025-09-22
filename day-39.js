//100 Days Of Code
//Day-39
// 💡 Today’s Challenge - Browser Tabs Manager (DLL Insertions, Deletions & Traversal) 
// 👉 Requirements:
// 1. Open New Tab at End → Insert a new tab at the end.
// 2. Open New Tab at Position → Insert a new tab at a given position (0-based).
// 3. Close Tab at Position → Delete the tab at a given position.
// 4. Move Next Tab → Traverse forward by one step.
// 5. Move Previous Tab → Traverse backward by one step.
// 6. Show All Tabs Forward → Print tabs left to right.
// 7. Show All Tabs Backward → Print tabs right to left.

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.current = null;
    }

    openTabEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = this.current = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            newNode.next = null;
        }
        this.size++;
    }

    openTabAtPosition(pos, tabName) {
        if (pos < 0 || pos > this.size) {
            console.log("Not a valid position");
            return;
        }

        let newNode = new Node(tabName);

        if (pos === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;
            if (this.size === 0) {
                this.tail = this.current = newNode;
            }
        } else if (pos === this.size) {
            this.openTabEnd(tabName);
            return;
        } else {
            let temp = this.head;
            for (let i = 0; i < pos; i++) {
                temp = temp.next;
            }
            let prevNode = temp.prev;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = temp;
            temp.prev = newNode;
        }

        this.size++;
    }

    closeTab(position) {
        if (position < 0 || position >= this.size) {
            console.log("Not valid position");
            return;
        }

        if (position === 0) {
            let closingTab = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            if (this.current === closingTab) {
                this.current = this.head;
            }
            if (closingTab === this.tail) {
                this.tail = null;
            }
        } else {
            let temp = this.head;
            for (let i = 0; i < position; i++) {
                temp = temp.next;
            }
            if (temp.prev) {
                temp.prev.next = temp.next;
            }
            if (temp.next) {
                temp.next.prev = temp.prev;
            }
            if (temp === this.tail) this.tail = temp.prev;
            if (temp === this.current) {
                this.current = temp.prev || temp.next;
            }
        }

        this.size--;
    }

    moveNext() {
        if (!this.current) return null;
        this.current = this.current.next ? this.current.next : this.head;
        console.log(this.current.data);
    }

    movePrev() {
        if (!this.current) return null;
        this.current = this.current.prev ? this.current.prev : this.tail;
        console.log(this.current.data);
    }

    showForward() {
        let results = "";
        let current = this.head;
        while (current != null) {
            results += current.data + " -> ";
            current = current.next;
        }
        console.log(results + "null");
    }

    showBackward() {
        let results = "";
        let current = this.tail;
        while (current != null) {
            results += current.data + " -> ";
            current = current.prev;
        }
        console.log(results + "null");
    }
}
let dList = new DoublyLinkedList();
dList.openTabEnd("Google");
dList.openTabEnd("Youtube");
dList.openTabEnd("GitHub");
dList.openTabAtPosition(1, "LinkedIn");
dList.showForward();         
dList.closeTab(2);
dList.showForward();         
dList.moveNext();            
dList.movePrev();           
dList.showBackward();