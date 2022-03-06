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
