class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    if (!this.values.length) {
      this.values.push(value);
      return this;
    }
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

console.log(validateHeap(binaryHeap.values));
