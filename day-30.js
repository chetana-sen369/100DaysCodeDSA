//100 Days Of Code
//Day-30
//Problem Statement:Implement the following operations on a Singly Linked List: 
// 1️⃣ Insert a node at the end 
// 2️⃣ Insert a node at the beginning 
// 3️⃣ Delete a node from the beginning
// 4️⃣ Delete a node from the end
class Node{
    constructor(data){
     this.data = data,
     this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insertAtEnd(data){
        const newNode= new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    insertAtBeginning(data){
        const newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    deleteFromBeginning() {
    if (this.head === null) {
        console.log("List is empty");
        return;
    }
    this.head = this.head.next;
    if (this.head === null) {   // list became empty
        this.tail = null;
    }
}

    deleteFromEnd(data){
        if(this.head===null){
            console.log('List is empty');
            return;
        }
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
            return;
        }
        
        let current=this.head;
        while(current.next!==this.tail){
            current=current.next;
        }
        current.next=null;
        this.tail=current;
    }
    printList(){
        let current=this.head;
        let result="";
        while(current){
            result+=current.data+ "->";
            current=current.next;
        }
        result+="null";
        console.log(result);
    }
}

let list = new LinkedList();
list.deleteFromBeginning(10);
list.insertAtEnd(10);        // 10 -> null
list.insertAtEnd(20);        // 10 -> 20 -> null
list.insertAtBeginning(5); 
list.printList();            // 5 -> 10 -> 20 -> null
list.deleteFromEnd();        // 5 -> 10 -> null
list.deleteFromBeginning();  // 10 -> null
list.printList();            // Output: 10 -> null
