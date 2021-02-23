function UndirectedGraph() {
    this.edges = {};
}

UndirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}

UndirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
    if (weight == undefined) { weight = 0; }

    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}

UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) delete this.edges[vertex1][vertex2];
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) delete this.edges[vertex2][vertex1];
}

UndirectedGraph.prototype.removeVertex = function (vertex) {
    for (let adjacentVertex in this.edges[vertex]) this.removeEdge(adjacentVertex, vertex);
    delete this.edges[vertex];
}

var graph = new UndirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2, 1);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 10);
graph.addEdge(4, 5, 100);
graph.addEdge(1, 5, 88);
graph.removeVertex(5);
graph.removeVertex(1);
graph.removeEdge(2, 3);
console.log(graph.edges);