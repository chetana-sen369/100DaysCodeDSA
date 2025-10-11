//100 Days Of Code
//Day-46
//Today’s Challenge - Token Ring Network Simulation 
//Requirements:
//1. AddNode → Insert a new computer/node into the circular network (end of list).
//2. ShowNetwork → Traverse once and display all nodes in the ring.
//3. PassToken(k) → Starting from head, simulate passing the token k times around the ring and print which node has the token at each step.

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
    addNode(node){
        let newNode=new Node(node);
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=newNode;
        }else{
          this.tail.next=newNode;
          this.tail=newNode;
          this.tail.next=this.head;
        }
    }
    showNetwork(){
        if(!this.head){
            console.log("Newtwork is empty");
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
    passToken(k){
    if(!this.head){
        console.log("Network is empty");
        return;
    }
    let current=this.head;
    for(let i=0;i<k;i++){
        console.log("Token at:",current.data);
        current=current.next;
    }
    }
}
const token=new circularLinkedList();
token.addNode("ComputerA");
token.addNode("ComputerB");
token.addNode("ComputerC");
token.showNetwork();
token.passToken(6);
