class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  DFSrecurcive(vertex) {
    const visited = {};
    const result = [];

    const traverse = (vertex) => {
      if (!vertex) return result;

      visited[vertex] = true;
      result.push(vertex);

      const neighbors = this.adjacencyList[vertex];

      for (let n of neighbors) {
        if (!visited[n]) {
          traverse(n);
        }
      }

      return result;
    };

    return traverse(vertex);
  }

  DFSIterative(start) {
    const stack = [start];
    const visited = {};
    const result = [];

    while (stack.length) {
      const vertex = stack.pop();
      if (visited[vertex]) continue;
      visited[vertex] = true;
      result.push(vertex);

      stack.push(...this.adjacencyList[vertex]);
    }

    return result;
  }

  BFS(start) {
    const queue = [start];
    const visited = {};
    const result = [];

    while (queue.length) {
      const vertex = queue.shift();

      if (visited[vertex]) continue;
      visited[vertex] = true;
      result.push(vertex);
      queue.push(...this.adjacencyList[vertex]);
    }

    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSrecurcive("A")); // A,B,D,E,C,F
console.log(g.DFSIterative("A")); // A,C,E,F,D,B
console.log(g.BFS("A")); // A,B,C,D,E,F
