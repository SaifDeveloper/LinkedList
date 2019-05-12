
class Node {

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor(){
        this.head = null;
    }
    // Inserts a node to the start of linkedlist (head)
    insertFirst(data){
        this.head = new Node(data,this.head)
    }
    // Returns number of nodes in LinkedList
    size(){
        let counter = 0;
        let node = this.head;
        
        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }
    // Returns first node of the linkedlist
    getFirst(){
        return this.head;
    }
    // Return the last node of the linkedlist
    getLast(){
        // If the linkedlist has no nodes
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }
    // Clears the linkedlist
    clear(){
        this.head = null;
    }
    // Removes the first element of linkedlist
    removeFirst(){
        // If the linkedlist has no nodes
        if(!this.head){
            return;
        }

        let node = this.head;
        this.head = node.next;
    }
    // Removes the last element of the linkedlist
    removeLast(){
        // when there are no nodes
        if(!this.head){
            return;
        }
        // for one node
        if(!this.head.next){
            this.head = null;
            return;
        }
        // for >= 2 nodes
        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }
    // Inserts a node to the end of linkedlist
    insertLast(data){
        const last = this.getLast();
        // create a new node with the data supplied
        const node = new Node(data)
        if(last){
            // if there is a last node
            last.next = node;
        }else{
            //  if there is no last node - empty linkedlist
            this.head = new Node(data);
        }
    }
    // Returns a node at certain index
    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    // Removes a node at certain index
    removeAt(index){
        if(!this.head){
            return;
        }
        if(index === 0){
            this.head = this.head.next
            return
        }

        const previous =  this.getAt(index-1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
    }
    // Insert a node at certain index
    insertAt(data,index){
        // Insert at index 0, when list is empty
        if(!this.head){
            const node = new Node(data);
            this.head = node;
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        // if getAt() returns a falsy value, get the last element of the array
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;

    }

}

const list = new LinkedList();
list.insertFirst('a')
console.log(list)