class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  deQueue() {
    if (!this.first) return null;
    let oldNode = this.first;
    if (!this.first.next) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldNode.val;
  }
}