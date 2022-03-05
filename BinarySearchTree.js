class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            current.right === null;
            return this;
          }
        } else {
          if (value > current.value) {
            if (current.right === null) {
              current.right === newNode;
              current.left === null;
            }
          }
        }
      }
    }
  }
}
