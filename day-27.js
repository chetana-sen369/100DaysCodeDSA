//100 Days Of Code 
// Day-27
//Challenge: Insertions in Singly Linked List.You are given a singly linked list. Implement the following operations:
//Insert at Head → Add a new node at the beginning.
//Insert at Tail → Add a new node at the end.
//Insert at Position → Add a new node at a given 1-based position pos.
//Constraints & Edge Cases:
//If pos = 1, insertion happens at the head.
//If pos = length + 1, insertion happens at the tail.
//If pos > length + 1, show "Invalid Position".

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
    }

    insertAtHead(data){
       const newNode= new Node(data);
       if(this.head===null){
        this.head=newNode;
        this.tail=newNode;
       } else{
        newNode.next=this.head;
        this.head=newNode;
       }
    }

    insertAtTail(data){
        const newNode= new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }

    insertAtPosition(data,pos){
        if(pos < 1){
            console.log("Invalid Position");
            return;
        }
        const newNode= new Node(data);
        if(pos===1){
            this.insertAtHead(data);
            return;
        }
        let  temp=this.head;
        let count=1;
        while(temp!==null && count <pos -1){
            temp=temp.next;
            count++;
       
        }
        if(temp===null){
            console.log("position out of range");
            return;
        }
        newNode.next= temp.next;
        temp.next=newNode;

         if (temp == this.tail) {
            this.tail = newNode;
        }
    }

    printList(){
    let result = "";
        let temp = this.head;
        while (temp != null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";
        console.log(result);
    }
}

let list= new LinkedList();
list.insertAtHead(20);
list.insertAtTail(10);
list.insertAtPosition(7,1);
list.insertAtPosition(33,4);
list.insertAtPosition(46,7);
list.printList();