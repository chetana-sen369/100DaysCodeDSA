//100 Days Of Code
//Day-34
//Today’s Challenge - Music Playlist with Singly Linked List 
// Imagine you’re building a Playlist Manager where each song is stored in a Singly Linked List. 
// Requirements: 1. Add Song at End → Insert a song at the end of the playlist. 
// 2. Add Song at Beginning → Insert a song at the start of the playlist. 
// 3. Delete Song by Name → Remove the first occurrence of a song by its name. 
// 4. Delete Song by Position → Remove a song at a given position (1-based index). 
// 5. Show Playlist → Print the current list of songs.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class playList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertSongAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    insertSongAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    deleteSongByName(song) {
        if (this.head === null) {
            return;
        }
        if (this.head.data == song) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail === null;
                return;
            }
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data == song) {
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
    deleteSongByPosition(pos) {
        if (this.head === null) {
            return;
        }
        if (pos == 1) {
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
    showPlayList() {
        let current = this.head;
        let results = "";
        while (current != null) {
            results += current.data + "->";
            current = current.next;
        }
        console.log(results + "null");
    }
}
let list = new playList();
list.insertSongAtEnd("Shape of you");
list.insertSongAtEnd("Believer");
list.insertSongAtBeginning("Perfect");
list.showPlayList();
list.deleteSongByName("Believer");
list.showPlayList();
list.deleteSongByPosition(2);
list.showPlayList();