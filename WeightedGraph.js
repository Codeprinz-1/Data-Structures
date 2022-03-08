class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const preious = {};

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }
    }
  }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");

weightedGraph.addEdge("A", "B");
weightedGraph.addEdge("A", "C");
weightedGraph.addEdge("B", "D");
weightedGraph.addEdge("C", "E");
weightedGraph.addEdge("D", "E");
weightedGraph.addEdge("D", "F");
weightedGraph.addEdge("E", "F");
console.log(weightedGraph.breadthFirstTraverse("A"));
console.log(weightedGraph.adjacencyList);
