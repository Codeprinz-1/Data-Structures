class Node {
  constructor(val) {
    this.val = val
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head) {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode
  }

  shift() {
    if (!this.head) return null
    let removedNode = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length --;
    return removedNode;
  }

  unShift(val) {
    const newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let value;
    if (index < this.length / 2) {
      value = this.head;
      for (let i = 0; i < index; i++) {
        value = value.next;
      }
    } else {
      value = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        value = value.prev;
      }
    }
    return value;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return null;
    node.val = val;
    return this;
  }
}

let double = new DoublyLinkedList();
double.push(9).push(0).push(7);
// console.log(double.shift())
// console.log(double.shift())
// console.log(double.shift())
// console.log(double.unShift(65))
// console.log(double)
console.log(double.get(0))
console.log(double.get(1))
console.log(double.get(2))
console.log(double.set(2, 67))