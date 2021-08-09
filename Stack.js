class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.start = null;
    this.last = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.start;
      this.start = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.start) return null;
    let oldNode = this.start;
    if (!this.start.next) {
      this.last = null;
    }
    this.start = this.start.next;
    this.size--;
    return oldNode.val;
  }
}