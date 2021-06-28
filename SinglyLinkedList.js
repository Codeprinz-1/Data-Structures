// this is the code for the singlylinked list

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

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return previousNode
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    while(node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// the singlylinked is efficient in some  methods and not so much in others

// for example, its more efficient to do an insertion in a singly linked list than it is to do on an array as you can probably already tell fro0m the code
// an insertion in a singly linked list is 0(1) wheareas in an array, in the worst case, we wpould have to change the index of every item so its 0(n)

// the speed of removing things from the singly linked list depends on where the removal takes place
// if it is at the begining, its 0(1) but at the end is 0(n) because we would have to iterate over the list to find the second to the last item and break its connection to the last

// searching is 0(n)
// accessing is also 0(n)
