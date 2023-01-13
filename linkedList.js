class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop() {
    let on = this.head;

    while (on.next !== this.tail) {
      on = on.next;
    }

    on.next = null;
    this.tail = on;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return on;
  }

  shift() {
    if (!this.head) return undefined;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return this.head;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;

    return this;
  }

  get(n) {
    if (n < 0 || n > this.length) return null;

    let cur = this.head;

    while (n--) {
      cur = cur.next;
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
    if (n < 0 || n > this.length - 1) return false;

    if (n === this.length) return !!this.push(val);
    if (n === 0) return !!this.unshift(val);

    const prev = this.get(n - 1);
    const newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(n) {
    if (n < 0 || n > this.length - 1) return undefined;

    if (n === 0) return this.shift();
    if (n === this.length - 1) return this.pop();

    const prev = this.get(n - 1);
    let deleted = prev.next;
    prev.next = prev.next.next;
    this.length--;

    return deleted;
  }

  reverse() {
    if (this.length <= 1) return this.head;

    let on = this.head;
    let prev = null;
    this.tail = on;

    while (on) {
      let next = on.next;
      on.next = prev;
      prev = on;
      on = next;
    }

    this.head = prev;

    return this;
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

linkedList.insert(0, 0);
