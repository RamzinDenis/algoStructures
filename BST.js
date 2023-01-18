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

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.value) {
          if (current.right == null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    let current = this.root;

    while (current) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }

  BFS() {
    const data = [];
    const queue = [this.root];

    while (queue.length) {
      const el = queue.shift();
      data.push(el.value);

      if (el.left) queue.push(el.left);
      if (el.right) queue.push(el.right);
    }
    return data;
  }

  preOrder() {
    const data = [];

    function DFS(node) {
      if (!node) return data;

      data.push(node.value);

      if (node.left) DFS(node.left);
      if (node.right) DFS(node.right);

      return data;
    }

    return DFS(this.root);
  }

  postOrder() {
    const data = [];

    function DFS(node) {
      if (!node) return data;

      if (node.left) DFS(node.left);
      if (node.right) DFS(node.right);

      data.push(node.value);

      return data;
    }

    return DFS(this.root);
  }

  inOrder() {
    const data = [];

    function DFS(node) {
      if (!node) return data;

      if (node.left) DFS(node.left);
      data.push(node.value);
      if (node.right) DFS(node.right);

      return data;
    }

    return DFS(this.root);
  }
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(-1);
tree.insert(3);
tree.insert(2);
tree.insert(5);
tree.insert(0);
console.log(tree.preOrder());
console.log(JSON.stringify(tree));
