//100 Days Of Code
//Day-45
//Today’s Challenge - Circular Queue of Printers 
//Requirements:
//1. AddPrinter → Insert a new printer into the circular queue (end of list).
//2. ShowPrinters → Traverse once and print all printers in the queue.
//3. AssignJobs(k) → Simulate job assignment for k jobs in round-robin order (traverse circularly k times and print the printer assigned each job).

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
    addPrinter(data){
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
    showPrinter(){
        if(!this.head){
            console.log("Printer is empty");
            return;
        }
        let result=[];
        let current=this.head;
        do{
            result.push(current.data);
            current=current.next;
        }while(current!==this.head);
        console.log(result.join("->"));
       return result;
    }
    assignJobs(k){
    if(!this.head){
        console.log("No jobs are present");
        return;
    }
    let current=this.head;
    for(let i=0;i<k;i++){
        console.log("Job assigned to:",current.data);
        current=current.next;
    }
    }
}
const printers=new circularLinkedList();
printers.addPrinter("Printer1");
printers.addPrinter("Printer2");
printers.addPrinter("Printer3");
printers.showPrinter();
printers.assignJobs(7);