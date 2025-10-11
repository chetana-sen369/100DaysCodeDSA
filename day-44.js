//100 Days Of Code
//Day-44
//Requirements:
//1. Add Song at End → Insert a new song into the playlist (end of list).
//2. Add Song at Beginning → Insert a new song at the start of the playlist.
//3. Show Playlist → Traverse once and print all songs in the playlist order.
//4. Play Songs in Loop → Traverse circularly and print the first k songs being played in order.

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }  
}
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addSongAtEnd(song) {
        let newNode = new Node(song);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    insertSongAtBeginning(song) {
        let newNode = new Node(song);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }

    showPlaylist() {
        if (!this.head) {
            console.log("Playlist is empty");
            return;
        }
        let result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log("Playlist:", result.join(" -> "));
    }

    playSongOnLoop(k) {
        if (!this.head) {
            console.log("Playlist is empty");
            return;
        }
        let current = this.head;
        for (let i = 0; i < k; i++) {
            console.log(`Playing: ${current.data}`);
            current = current.next;
        }
    }
}

const playlist=new circularLinkedList();
playlist.addSongAtEnd("Shape of you");
playlist.addSongAtEnd("Believer");
playlist.addSongAtBeginning("Senorita");
playlist.showPlaylist();
playlist.playSongOnLoop(5);
