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
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(8);
tree.insert(2);
tree.insert(22);
tree.insert(7);
tree.insert(23);
tree.insert(1);
console.log(tree.find(8));
console.log(tree.find(9));
console.log(tree.find(2));
console.log(tree.find(22));
console.log(tree.find(7));
console.log(tree.find(23));
console.log(tree.find(1));
