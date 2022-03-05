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

  breadthFirstSearch(value) {
    // idealy a queue is used here but we would use an array
    if (!this.root) return null;
    const queue = [this.root];
    // const current = this.head;
    while (queue[0]) {
      const current = queue[0];
      current.right && queue.push(current.right);
      current.left && queue.push(current.left);
      if (current.value === value) {
        return current;
      }
      queue.shift();
    }
    return null;
  }

  deptFirstSearchPreOrder(value) {
    if (!this.root) return null;
    let foundNode = null;
    const recursiveSearch = (node) => {
      if (node.value === value) {
        foundNode = node;
      } else {
        if (node.left) recursiveSearch(node.left);
        if (node.right) recursiveSearch(node.right);
      }
    };
    recursiveSearch(this.root);
    return foundNode;
  }

  deptFirstTransversePostOrder() {
    if (!this.root) return null;
    const allValues = [];
    const recursiveSearch = (node) => {
      if (node.left) recursiveSearch(node.left);
      if (node.right) recursiveSearch(node.right);
      allValues.push(node.value);
    };
    recursiveSearch(this.root);
    return allValues;
  }

  deptFirsTraverseInOrder() {
    if (!this.root) return null;
    const allValues = [];
    const recursiveSearch = (node) => {
      if (node.left) recursiveSearch(node.left);
      allValues.push(node.value);
      if (node.right) recursiveSearch(node.right);
    };
    recursiveSearch(this.root);
    return allValues;
  }
}

// the find and insert methods are both O(log n) which is good as time complexities go but that is just the average
// and is not guaranteed for every kind of binary tree for example we can have a tree that has only lefts of rights,
// basically a flat tree, such a tree would be O(n) cause the operations will increase proportionally to the size of the tree

// the other search methtods are not unique to a binarry search tree but can work on any binary tree,
// they were added to this class to avoid having to defind separate classes

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(8);
tree.insert(2);
tree.insert(22);
tree.insert(7);
tree.insert(23);
tree.insert(1);
console.log(tree.deptFirstSearchPreOrder(9).value);
console.log(tree.deptFirstSearchPreOrder(8).value);
console.log(tree.deptFirstSearchPreOrder(2).value);
console.log(tree.deptFirstSearchPreOrder(22).value);
console.log(tree.deptFirstSearchPreOrder(7).value);
console.log(tree.deptFirstSearchPreOrder(23).value);
console.log(tree.deptFirstSearchPreOrder(3434));
console.log(tree.deptFirstSearchPreOrder(35));
console.log(tree.deptFirstSearchPreOrder(35));
console.log(tree.deptFirstSearchPreOrder(99090));
console.log(tree.deptFirstSearchPreOrder(1).value);
console.log(tree.deptFirstTransversePostOrder());
