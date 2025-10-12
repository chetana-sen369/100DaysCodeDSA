//100 Days Of Code
//Day-50
//Today’s Challenge - Reverse a Linked List
//Given a singly linked list, reverse it in-place (without using extra arrays).
//2. Implement a function reverseLinkedList(head) that returns the new head after reversal.
//3. Traverse the reversed list to display all node values.
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor() {
        this.head=null;
        this.tail=null;
    }
    insertAtHead(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        if(!this.tail){
            this.tail=newNode;
        }
    }
    reverse(){
        let prev=null;
        let current=this.head;
        while(current!=null){
            let forward=current.next;
            current.next=prev;
            prev=current;
            current=forward;
        }
        this.head=prev;
    }
    printList(){
    let result="";
    let current=this.head;
    while(current!=null){
        result+=current.data+'->';
        current=current.next;
    }
    return result+"null";
  }
}
const list=new LinkedList();
list.insertAtHead(5);
list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
console.log("Linked List:",list.printList());
list.reverse();
console.log("Reversed Linked List:",list.printList());