//100 Days Of Code
//Day-48
//Today’s Challenge - Round Table Meeting Simulation 
//Requirements:
//1. addParticipant(name) → Insert a new participant at the end of the round table.
//2. removeParticipant(name) → Remove a participant by their name (if they exist).
//3. showParticipants() → Traverse the circular table once and display all participants.
//4. skipAndSelect(k) → Starting from the current participant, move k steps forward and print the selected participant’s name (like passing a mic in the meeting).

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class roundTable {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addParticipant(name) {
    const newNode = new Node(name);
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

  removeParticipant(name) {
    if (!this.head) return;

    // Only one participant
    if (this.head === this.tail && this.head.data === name) {
      this.head = this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = this.tail;

    do {
      if (current.data === name) {
        prev.next = current.next;

        // Update head or tail if needed
        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = prev;
        }

        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  showParticipants() {
    if (!this.head) {
      console.log("No Participants");
      return [];
    }
    const result = [];
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" -> "));
    return result;
  }

  skipAndSelect(k) {
    if (!this.head) {
      console.log("No participants to select");
      return;
    }

    let current = this.head;
    
    for (let i = 1; i <= k; i++) {
      current = current.next;
    }

    console.log("Selected:", current.data);
  }
}


const table = new roundTable();

table.addParticipant("Alice");
table.addParticipant("Bob");
table.addParticipant("Charlie");
table.addParticipant("Diana");

table.showParticipants();            
table.skipAndSelect(3);            
table.removeParticipant("Charlie");
table.showParticipants();           
table.skipAndSelect(4);              


