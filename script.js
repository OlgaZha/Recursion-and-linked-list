class Node {
    value
    next
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        let node = new Node(value);
        if(this.head === null) {
            this.head = node;
        } else {
            this.appendRecusrive(this.head, node);
        }
        this.size++;
    }
    appendRecusrive(current, newNode) {
        if(current.next === null) {
            current.next = newNode;
        } else {
            this.appendRecusrive(current.next, newNode);
        }
    }
    display() {
        this.displayRecusrive(this.head)
    }
    displayRecusrive(currentNode) {
        if(currentNode !== null) {
            console.log(currentNode.value)
            this.displayRecusrive(currentNode.next)
        } 
    }
    delete() {
        if(this.head === null) {
            return null;
        } else {
            let temp = this.head;
            this.head = this.head.next;
            temp = null;
            return this.head;
        }
    }
    search(value) {
        return this.searchRec(this.head, value)
    } 
    searchRec(current, value) {
        if(current === null) {
            return false;
        } else if(current.value === value) {
            return true;
        }
        return this.searchRec(current.next, value)
    }
}

let list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.display()
console.log(list.search(4))

// array function
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.") 
//   );

//
let rectangle = {
    width: 40,
    height: 50,
    getArea() {return this.width*this.height}
}

// console.log(rectangle.getArea())

const rectangle1 = {
    width: 5,
    height: 10,
    getArea() {
    return this.width * this.height; // simple function inside object, we have this
    }
    };

    const rectangle2 = {
        width: 50,
        height: 100,
        getArea: () => {
        return rectangle2.width * rectangle2.height; // Arrow function inside object, we don't have
        this
        }
    }

    //homework
    class Car {
        constructor(make, model, year, mileage) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.mileage = mileage;
        }
    
        drive(distance) {
            this.mileage += distance;
        }
    
        getDetails() {
            console.log(`${this.age} years old ${this.make} ${this.model} with ${this.mileage} miles`);
        }
    
        get age() {
            return new Date().getFullYear() - this.year;
        }
    }
    
    let car = new Car('BMW', 'X5', 2020, 42000);
    car.drive(500); 
    // car.getDetails(); 
    // console.log(`Car age: ${car.age} years`); 
    