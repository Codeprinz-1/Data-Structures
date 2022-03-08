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
