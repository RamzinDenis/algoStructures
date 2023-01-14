class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head === null;
      this.tail = null;

      return shiftedNode;
    }

    this.head = shiftedNode.next;
    this.head.prev = null;
    shiftedNode.next = null;
    this.length--;

    return shiftedNode;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;

    return this;
  }

  get(n) {
    if (n < 0 && n >= this.length) return null;
    let cur = this.head;

    if (n > this.length / 2) {
      cur = this.tail;

      while (n++ < this.length - 1) {
        cur = cur.prev;
      }
    } else {
      while (n--) {
        cur = cur.next;
      }
    }

    return cur;
  }

  set(n, val) {
    let node = this.get(n);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(n, val) {
    if (n < 0 || n > this.length) return false;

    if (n === this.length) return !!this.push(val);
    if (n === 0) return !!this.unshift(val);

    const prev = this.get(n - 1);
    const next = prev.next;
    const newNode = new Node(val);
    next.prev = newNode;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = next;
    this.length++;

    return true;
  }

  remove(n) {
    if (n < 0 || n > this.lenth - 1) return undefined;

    if (n === 0) return this.shift();
    if (n === this.length - 1) return this.pop();

    const removedNode = this.get(n);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;

    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

list.remove(1);
console.log(list);
