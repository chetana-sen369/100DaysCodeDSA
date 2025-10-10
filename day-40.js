//100 Days Of Code
//Day-40
//Requirements:
//1. Post Tweet (Insert at Head) → Every new tweet appears at the top of the feed.
//2. Delete Oldest Tweet (Delete at Tail) → Remove the last tweet when feed gets too long.
//3. Delete Tweet at Index → Delete a tweet at a given position (0-based).
//4. Show Feed Forward → Print tweets from newest to oldest.
//5. Show Feed Backward → Print tweets from oldest to newest.

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
        this.current = null;
        this.size = 0;
    }
    insertAtHead(tweet) {
        let newNode = new Node(tweet);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    deleteOldestTweet() {
        if (!this.tail) return "Feed is empty";
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }
    deleteAtHead() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        const deletedTweet = this.head.data;
        if (this.head.next === null) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return deletedTweet;
    }
    deleteTweetAtIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.deleteAtHead();
            return;
        }
        if (index == this.size - 1) {
            this.deleteOldestTweet();
            return;
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        let deletedData = current.data;
        let prevNode = current.prev;
        let nextNode = current.next;

        prevNode.next = newNode;
        nextNode.prev = prevNode;

        this.size--;
        return deletedData;
    }
    viewForward() {
        let result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join("->"));
    }
    viewBackward() {
        let result = [];
        let temp = this.tail;
        while (temp) {
            result.push(temp.data);
            temp = temp.prev;
        }
        console.log(result.join("->"));
    }
}
const tweets = new DoublyLinkedList();
tweets.insertAtHead("hello linkedin");
tweets.insertAtHead("day-40");
tweets.insertAtHead("linked lists are amazing");
tweets.viewForward();
tweets.deleteOldestTweet();
tweets.viewForward();
tweets.viewBackward();
