class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    const reshuffle = (index) => {
      const parent = Math.floor((index - 1) / 2);
      if (this.values[parent] && this.values[parent].priority < priority) {
        [this.values[parent], this.values[index]] = [
          this.values[index],
          this.values[parent],
        ];
        reshuffle(parent);
      }
    };
    reshuffle(this.values.length - 1);
    return this;
  }

  deQueue() {
    const max = this.values[0];
    const end = this.values.pop();
    const length = this.values.length;
    const sinkDown = (index = 0) => {
      const element = this.values[index];
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) return;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      sinkDown(swap);
    };
    if (this.values.length > 0) {
      this.values[0] = end;
      sinkDown();
    }
    return max;
  }
}

// in this implementation of the priority queue, the greater the number, the more the priority
