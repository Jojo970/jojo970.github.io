class Node {
    constructor(data) {
        this.data = data;
        this.next =null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront() {
        if(!this.head) {
            return this;
        }
        this.head = this.head.next
    }

    front() {
        return this.head.data;
    }

    contains(val) {
        let runner = this.head
        let exists = false

        while(runner !== null) {
            if(val == runner.data) {
                exists = true
                break
            }
            runner = runner.next
        }

        return exists
    }

    length() {
        let runner = this.head
        let num = 0

        while(runner !== null) {
            num+=1
            runner = runner.next
        }
        return num
    }

    display() {
        
        let runner = this.head
        
        let list = runner.data
        runner = runner.next
        while (runner !== null){
            list = list + ','
            let adding = runner.data
            list = list + adding
            runner = runner.next
        }

        return list
    }

    max() {
        let runner = this.head

        let max = runner.data
        runner = runner.next

        while (runner !== null) {
            if (max < runner.data) {
                max = runner.data
                runner = runner.next
            } else { runner = runner.next}
        }

        return max
    }

    min() {
        let runner = this.head

        let min = runner.data
        runner = runner.next

        while (runner !== null) {
            if (min > runner.data) {
                min = runner.data
                runner = runner.next
            } else { runner = runner.next}
        }

        return min
    }

    average() {
        let runner = this.head

        let avg = runner.data
        let counter = 1

        runner = runner.next

        while (runner !== null) {
            avg += runner.data
            counter++
            runner = runner.next
        }
        avg = avg/counter

        return avg
    }

}

SLL1 = new SLL()

SLL1.addFront(76)
SLL1.addFront(2)

console.log(SLL1)

x = SLL1.display()

console.log(x)

SLL1.addFront(11.41)

y = SLL1.display()

console.log(y)