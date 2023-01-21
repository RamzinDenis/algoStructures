class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);

    if (this.values.length === 1) return this;

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex]) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this;
  }

  //   extractMax() {
  //     const max = this.values[0];
  //     this.values[0] = this.values[this.values.length - 1];
  //     this.values.pop();
  //     let idx = 0;

  //     while (true) {
  //       let childIdx = idx * 2;

  //       if (this.values[childIdx + 1] > this.values[childIdx + 2]) {
  //         childIdx += 1;
  //       } else {
  //         childIdx += 2;
  //       }

  //       if (this.values[idx] < this.values[childIdx]) {
  //         this.swap(this.values, idx, childIdx);
  //         idx = childIdx;
  //       } else break;
  //     }

  //     return max;
  //   }

  //   swap(arr, l, r) {
  //     let temp = arr[l];
  //     arr[l] = arr[r];
  //     arr[r] = temp;
  //   }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.extractMax();
heap.extractMax();

console.log(heap);
