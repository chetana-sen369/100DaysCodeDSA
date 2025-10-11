//100 Days Of Code
//Day-44
//Requirements:
//1. Add Song at End → Insert a new song into the playlist (end of list).
//2. Add Song at Beginning → Insert a new song at the start of the playlist.
//3. Show Playlist → Traverse once and print all songs in the playlist order.
//4. Play Songs in Loop → Traverse circularly and print the first k songs being played in order.

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
        this.size=0;
    }
    addSongAtEnd(song){
    let newNode=new Node(song);
    if(!this.head) {
       this.head=this.tail=newNode;
       newNode.next=newNode;
    }else{
           this.tail.next=newNode;
           this.tail=newNode;
           this.tail.next=this.head;
    }
    this.size++;
    }
    addSongAtBeginning(song){
        let newNode=new Node(song);
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=newNode;
        }else{
               newNode.next=this.head;
               this.head=newNode;
               this.tail.next=this.head;
        }
        this.size++;
    }
      showPlaylist(){
        if (!this.head) {
        console.log("Playlist is empty");
        return;
    }
        let result=[];
        let current=this.head;
        do{
            result.push(current.data);
            current=current.next;
        }while(current!==this.head);
        console.log("Playlist:", result.join("->"));
        return result;
    }
    playSongOnLoop(k){
        let result=[];
        let current=this.head;
        if(!this.head) {
            console.log("playlist is empty");
            return;
        }
        for(let i=0;i<k;i++){
             console.log(`Playing ${current.data}`);
             current=current.next;
        }
    }
}
const playlist=new circularLinkedList();
playlist.addSongAtEnd("Shape of you");
playlist.addSongAtEnd("Believer");
playlist.addSongAtBeginning("Senorita");
playlist.showPlaylist();
playlist.playSongOnLoop(5);