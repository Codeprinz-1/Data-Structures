class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    if (!this.values.length) {
      this.values.push(value);
      return this;
    }
    const index = this.values.length;
    const parent = Math.floor((index - 1) / 2);
    if (this.values[parent] < value) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];
    }
    return this;
  }
}
