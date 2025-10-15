//100 Days Of Code
//Day-58
//Problem Statement 
// You are required to implement a Queue data structure using an array (or list in JavaScript). 
// Your queue should support the following operations:
//  * enqueue(x) → Add element x to the rear of the queue.
//  * dequeue() → Remove and return the front element.
//  * front() → Return the front element without removing it.
//  * isEmpty() → Return true if the queue is empty, else false.
//  * size() → Return the total number of elements in the queue.

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

    isEmpty(){
        return this.arr.length===0;
    }

    front(){
        if(this.isEmpty()){
          console.log("Queue is empty")  ;
          return null;
        }
      return this.arr[0];
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
}

const queue=new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();
console.log("Dequeue Element:",queue.dequeue());
queue.enqueue(40);
console.log("First element",queue.front());
console.log("size:",queue.size());
queue.printQueue();

