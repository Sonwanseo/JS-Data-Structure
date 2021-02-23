function DirectedGraph() {
    this.edges = {};
}

DirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}

DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
    if (weight == undefined) weight = 0;

    this.edges[origVertex][destVertex] = weight;
}

DirectedGraph.prototype.removeEdge = function (origVertex, destVertex) {
    if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
        delete this.edges[origVertex][destVertex];
    }
}

DirectedGraph.prototype.removeVertex = function (vertex) {
    for (let adjacentVertex in this.edges[vertex]) this.removeEdge(adjacentVertex, vertex);

    delete this.edges[vertex];
}

DirectedGraph.prototype.traverseBFS = function (vertex, fn) {
    let queue = [], visited = {};

    queue.push(vertex);

    while (queue.length) {
        vertex = queue.shift();
        if (!visited[vertex]) {
            visited[vertex] = true;
            fn(vertex);
            for (let adjacentVertex in this.edges[vertex]) queue.push(adjacentVertex);
        }
    }
}
// 시간 복잡도: O(V + E)
// V는 정점의 개수, E는 간선의 개수

DirectedGraph.prototype.traverseDFS = function (vertex, fn) {
    var visited = {};
    this._traverseDFS(vertex, visited, fn);
}

DirectedGraph.prototype._traverseDFS = function (vertex, visited, fn) {
    visited[vertex] = true;
    fn(vertex);
    for (let adjacentVertex in this.edges[vertex]) {
        if (!visited[adjacentVertex]) {
            this._traverseDFS(adjacentVertex, visited, fn);
        }
    }
}
// 시간 복잡도: O(V + E)
// V는 정점의 개수, E는 간선의 개수

function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
    var minimumDistance = Infinity, nodeWithMinimumDistance = null;

    for (let node in Q) {
        if (dist[node] <= minimumDistance) {
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }

    return nodeWithMinimumDistance;
}

DirectedGraph.prototype.Dijkstra = function (source) {
    // 정점 집합 Q를 생성한다.
    var Q = {}, dist = {};
    for (let vertex in this.edges) {
        // 모르는 거리는 무한으로 설정한다.
        dist[vertex] = Infinity;
        // v를 Q에 추가한다.
        Q[vertex] = this.edges[vertex];
    }
    // 출발점에서 출발점까지의 거리를 0으로 설정한다.
    dist[source] = 0;

    while (!_isEmpty(Q)) {
        var u = _extractMin(Q, dist); // 최소 거리를 얻는다.

        // Q로부터 u를 제거한다.
        delete Q[u];

        // v가 여전히 Q에 있는 한
        // u의 각 이웃 v에 대해 다음을 수행한다.
        for (let neighbor in this.edges[u]) {
            // 현재 거리
            var alt = dist[u] + this.edges[u][neighbor];
            // 더 짧은 경로가 발견됐다.
            if (alt < dist[neighbor]) dist[neighbor] = alt;
        }
    }

    return dist;
}
// 시간 복잡도: O(V^2 + E)

DirectedGraph.prototype.topologicalSortUtil = function (v, visited, stack) {
    visited.add(v);

    for (let item in this.edges[v]) {
        if (visited.has(item) == false) this.topologicalSortUtil(item, visited, stack)
    }
    stack.unshift(v);
}

DirectedGraph.prototype.topologicalSort = function () {
    var visited = new Set(), stack = [];

    for (let item in this.edges) {
        if (visited.has(item) == false) this.topologicalSortUtil(item, visited, stack);
    }
    return stack;
}
// 시간 복잡도: O(V + E)
// 공간 복잡도: O(V)

var g = new DirectedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addVertex('B', 'A');
g.addVertex('D', 'C');
g.addVertex('D', 'B');
g.addVertex('B', 'A');
g.addVertex('A', 'F');
g.addVertex('E', 'C');
var topologicalOrder = g.topologicalSort();
console.log(g);
// DirectedGraph {
// V: 6,
// E: 6,
// edges:
// { A: { F: 0 },
// B: { A: 0 },
// C: {},
// D: { C: 0, B: 0 },
// E: { C: 0 },
// F: {} } }
console.log(topologicalOrder); // ['E', 'D', 'C', 'B', 'A', 'F' ]