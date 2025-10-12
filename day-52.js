//100 Days Of Code
//Day-52
//Today’s Challenge - Reverse a Name using Doubly Linked List 
//Requirements:
//1. Insert each character of the name into a Doubly Linked List.
//2. Traverse forward to print the name normally.
//3. Think of how you can reverse name in Doubly 

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.prev=null;
    }
    insertAtHead(char){
        let newNode=new Node(char);
        if(!this.head){
            this.head=this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
    }
    insertAtTail(char){
        let newNode=new Node(char);
        if(!this.tail){
            this.head=this.tail=newNode;
        }else{
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
        printForward(){
            let result="";
            let current=this.head;
            while(current){
             result+=current.data+ (current.next?"->":"");
             current=current.next;
            }
            console.log("Forward Traversal:"+ result);
        }

    printBackward(){
        let result="";
        let current=this.tail;
        while(current){
         result+=current.data+(current.prev?"->":"");
         current=current.prev;
        }
        console.log("Backward Traversal:"+ result);
    }
}
let myName=new doublyLinkedList();
myName.insertAtHead("C");
myName.insertAtTail("H");
myName.insertAtTail("I");
myName.insertAtTail("N");
myName.insertAtTail("K");
myName.insertAtTail("U");
myName.printForward();
myName.printBackward();
