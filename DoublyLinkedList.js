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
      this.head = newNode;
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

  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unShift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let previousNode = this.get(index -1);
    let nextNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = newNode;
    newNode.prev = previousNode;
    nextNode.prev = nextNode;
    this.length ++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }
}