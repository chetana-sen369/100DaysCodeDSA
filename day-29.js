//100 Days Of Code
//Day-29
//Problem Statement: Implement a Linked List with the following operations: 
// 1. Insert a node at any given position
//  2. Delete a node from any given position 
// 3. Print the entire linked list

class Node {
    constructor(data) {
        this.data = data,
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head=null,
        this.tail=null
    }

insertAtPosition(data,position){
        if(position<1){
           console.log("position out of range")
            return;
        }
         const newNode=new Node(data);
         if(position === 1){
            newNode.next=this.head;
            this.head=newNode;
            if(this.tail===null){
                this.tail=newNode;
            }
            return;
         }
        let current=this.head;
        let count=1;
        while (current !== null && count < position - 1) {
        current = current.next;
        count++;
    }
        if(current===null){
            console.log("position out of range");
            return;
        }
        newNode.next=current.next;
        current.next=newNode;
        if(newNode.next === null){
            this.tail = newNode;
        }
    }
    deleteByPosition(index){
        if(index<1 || this.head===null){
            console.log("position out of range");
        return;
    }

    // Case 1: Delete head
    if (index === 1) {
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;          

        return;
    }

    // Case 2: Traverse to index
    let current = this.head;
    let previous = null;
    let count = 1;
    while (current !== null && count < index) {
        previous = current;
        current = current.next;
        count++;
    }

    if (current === null) {
        console.log("position out of range");
        return;
    }

    // Case 3: Delete node
    previous.next = current.next;

    if (previous.next === null) {
        this.tail = previous;          
    }

}
} 
    printList(){
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }

}
let list=new LinkedList();
list.insertAtPosition(10,1);  
list.insertAtPosition(20,2);  
list.insertAtPosition(30,2); 
list.printList(); 
list.deleteByPosition(1);  
list.printList();

