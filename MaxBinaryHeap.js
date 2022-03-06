class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    const reshuffle = (index) => {
      const parent = Math.floor((index - 1) / 2);
      if (this.values[parent] < value) {
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

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(7);
binaryHeap.insert(6);
binaryHeap.insert(3);
binaryHeap.insert(9);
binaryHeap.insert(1);
binaryHeap.insert(34);
binaryHeap.insert(78);
binaryHeap.insert(0);
binaryHeap.insert(34);

const validateHeap = (list) => {
  for (let i = 0; i < list.length; i++) {
    const parent = Math.floor((i - 1) / 2);
    if (list[parent] < list[i]) return false;
  }
  return true;
};
console.log(binaryHeap.values);

console.log(binaryHeap.extractMax());
console.log(validateHeap(binaryHeap.values));
console.log(binaryHeap.values);
console.log(binaryHeap.extractMax());
console.log(validateHeap(binaryHeap.values));
console.log(binaryHeap.values);
console.log(binaryHeap.extractMax());
console.log(validateHeap(binaryHeap.values));
console.log(binaryHeap.values);
