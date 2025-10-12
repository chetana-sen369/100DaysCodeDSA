//100 Days Of Code
//Day-51
//Today’s Challenge - Find the Middle of a Linked List
// Requirements:
//1. Given a singly linked list, write a function findMiddle(head) that returns the value of the middle node.
//2. If the list has even number of nodes, return the second middle node (standard interview convention).
//3. Make sure the solution runs in O(n) time and uses O(1) extra space.

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
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
 findMiddleNode(){
    let fast=this.head;
    let slow=this.head;
    if(!this.head){
        return null;
    }
    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next;
    }
    console.log("Middle node",slow.data);
    return slow;
 }
 printList(){
    let result="";
    let current=this.head;
    while(current!=null){
        result+=current.data+"->";
        current=current.next;
    }
    console.log(result+"null");
 }
}
let list=new LinkedList();
list.insertAtHead(60);
list.insertAtHead(50);
list.insertAtHead(40);
list.insertAtHead(30);
list.insertAtHead(20);
list.insertAtHead(10);
list.printList();
list.findMiddleNode();
