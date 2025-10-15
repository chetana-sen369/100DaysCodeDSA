//100 Days Of Code
//Day-59
//Reverse First K Elements of a Queue
class Queue{
    constructor(){
        this.arr=[];
    }
    enqueue(element){
        return this.arr.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is underflow");
           return null;
        }
        return this.arr.shift();
    }
    front(){
        if(this.arr.length===0){
            console.log("Queue is empty");
            return null;
        }
        return this.arr[0];
    }
    isEmpty(){
      return this.arr.length===0;
    }
    size(){
        return this.arr.length;
    }
    printQueue(){
      let queueString="";
      for(let i=0;i<this.size();i++){
        queueString+=this.arr[i]+ " ";
      }
      console.log("Queue:",queueString);
   }
    reverseFirstk(k){
        if(k>this.size() || k<0){
            console.log("Invalid k value");
            return;
        }
        if(k===0) return;
        let stack=[];
        for (let i=0;i<k;i++){
           stack.push(this.dequeue());
        }
        while(stack.length>0){
            this.enqueue(stack.pop());
        }
        let remaining=this.size-k;
        for(let i=0;i<remaining;i++){
            this.enqueue(this.dequeue());
        }
        console.log(`After removing ${k} elements:`,this.arr);
    }
}
const queues=new Queue();
queues.enqueue(10);
queues.enqueue(30);
queues.enqueue(40);
queues.enqueue(50);
queues.printQueue();
queues.reverseFirstk(2);
queues.printQueue();