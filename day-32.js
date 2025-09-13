//100 Days Of Code
//Day-32
//Problem Statement: Requirements:
//Visit a new URL → Insert at the end.
// Go back → Move one step backward (but remember, in singly linked list you can’t directly go back think how you’ll handle this).
// Go forward → Move one step forward in the list.
// Show current page → Print the current node’s value.
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
        this.current = null;
    }
    insertAtEnd(url) {
        const newNode = new Node(url);
        if (this.current && this.current.next) {
            this.current.next = null;
            this.tail = this.current;
        }
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.current = newNode;
        }
        console.log(url);
    }
    back() {
        if (this.current === this.head) {
            console.log("No previous");
            return;
        }
        let temp = this.head;
        while (temp.next !== this.current) {
            temp = temp.next;
        }
        this.current = temp;
        console.log(this.current.data);
    }
    forward() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            console.log(this.current.data);
        } else {
            console.log("No forward page");
        }
    }
    showCurrentPage() {
        if (this.current) {
            if (this.current) {
                console.log(this.current.data)
            } else {
                console.log("No page visited");
            }
        }
    }
}
let website = new LinkedList();
website.insertAtEnd("google.com");
website.insertAtEnd("github.com");
website.insertAtEnd("linkedin.com");
website.back();
website.forward();
website.insertAtEnd("stackoverflow.com");
website.showCurrentPage();