class Node {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail
    this.length --
    this.tail.next = null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.head) {
      let previousHead = this.head;
      this.head = previousHead.next;
      this.length --;
      if (this.length === 0) {
        this.tail = null
      }
      return previousHead
    }
  }

  unShift(val) {
    const newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = this.head
    }
    this.length ++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next
    }
    return current;
  }

  set(index, val) {
    let item = this.get(index)
    if (!item) return false;
    item.val = val;
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    const newNode = new Node(val)
    if (index === 0) return this.unShift(newNode);
    if (index === this.length) return this.push(newNode);
    let previousNode = this.get(val - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return this
  }
}

let u = new SinglyLinkedList()
u.push('fhfh').push('ghghg').push('hfhf')
console.log(u.insert(1, 'p'))
// console.log(u)
// console.log(u.shift())
// console.log(u.shift())
// console.log(u)
// console.log(u.unShift('p'))
// console.log(u.unShift('o'))
// console.log(u.unShift('y'))
// console.log(u)