//100 Days Of Code
//Day-43
//Requirements:
//1. Add Task at End → Insert a new task into the scheduler (end of list).
//2. Add Task at Beginning → Insert a new task at the start of the list.
//3. Display Tasks Once → Traverse the list once and print all tasks in order.
//4. Simulate One Round of Execution → Traverse the circular list and print tasks as if the CPU executed each task once in round-robin order.
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class circularLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insertAtHead(data){
    let newNode= new Node(data);
        if(!this.head){
         this.head=this.tail=newNode;
         newNode.next=newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }
    insertAtTail(data){
        let newNode=new Node(data);
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
            this.tail.next=this.head;
        }
    }
    displayTasks(){
        let result=[];
        if (!this.head) {
            console.log("No tasks scheduled");
            return;
        }
        let current=this.head;
        do{
            result.push(current.data);
            current=current.next;
        }while(current!==this.head);
        console.log("Display tasks:",result.join("->"));
        return result;
    }
  simulateRoundRobin(){
    if(!this.head){
        console.log("No tasks to execute");
        return;
    }
    let current=this.head;
    do{
        console.log("Executing:",current.data);
        current=current.next;
    }while(current!=this.head);
  }
}
const list = new circularLinkedList();
list.insertAtTail("Task 1");
list.insertAtTail("Task 2");
list.insertAtHead("Task 3");
list.displayTasks();

list.simulateRoundRobin();
