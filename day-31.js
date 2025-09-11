//100 Days Of Code
//Day-31
//Implement the following operations on a Singly Linked List:
// Insert a node at the end
// Insert a node at the beginning
//Delete a node by value (delete the first occurrence of the given value)
// Delete a node at a given position (1-based index)
 
class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}
class LinkedList{
    constructor(data){
        this.head=null; 
        this.tail=null;
    }
    insertAtHead(data){
    const newNode= new Node(data);
    if(this.head===null){
        this.head=newNode;
        this.tail=newNode;
    }else{
        newNode.next=this.head;
        this.head=newNode;
    }
    }
    insertAtTail(data){
      const newNode=new Node(data);
      if(this.head===null){
        this.head=newNode;
        this.tail=newNode;
      }else{
        this.tail.next=newNode;
        this.tail=newNode;
      }
    }
   deleteByValue(val){
    if(this.head === null){
        return; 
    }
    if(this.head.data === val){
        this.head = this.head.next;
        if(this.head === null){
            this.tail = null; 
        }
        return;
    }

    let current = this.head;
    while(current.next !== null){
        if(current.next.data === val){
            current.next = current.next.next;
            if(current.next === null){
                this.tail = current; 
            }
            break;
        } else {
            current = current.next;
        }
    }
}

    deleteByPosition(pos){
    if(this.head === null){
        return; 
    }

    if(pos === 1){
        this.head = this.head.next;
        if(this.head === null){
            this.tail = null; 
        }
        return;
    }

    let current = this.head;
    for(let i = 1; i < pos - 1; i++){
        if(current === null || current.next === null){
            return; 
        }
        current = current.next;
    }

    let nodeToDelete = current.next;
    if(nodeToDelete === null){
        return; 
    }

    current.next = nodeToDelete.next;

    if(current.next === null){
        this.tail = current;
    }
}
printList(){
    let current=this.head;
    let result=[];
    while(current){
        result+=current.data+ "->";
        current=current.next;
    }
     result+="null";
     console.log(result);
}
}
let list=new LinkedList();
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtHead(5);
list.printList();
list.deleteByValue(20);
list.printList();
list.deleteByPosition(2);
list.printList();