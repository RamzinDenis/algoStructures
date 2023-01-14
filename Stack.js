class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = new Node(val);
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    const removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }

    this.size--;

    return removedNode.val;
  }
}

const stack = new Stack();

stack.push("First");
stack.push("Second");
stack.push("Third");
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
