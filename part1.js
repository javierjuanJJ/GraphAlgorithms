const depthFirstPrint = (graph, source) => {
    console.log(source);
    for (let graphElement of graph[source]) {
        depthFirstPrint(graph, graphElement);
    }
}

const breadhtFirstPrint = (graph, source) => {
  const gueue = [ source ];
  while (gueue.length > 0){
      const current = gueue.shift();
      console.log(current);
      for (let graphElement of graph[current]) {
          gueue.push(graphElement);
      }
  }
}

const hasPath = (graph, src, dst, visited) => {

    if (src === dst){
        return true;
    }

    if (visited.has(src)){
        return false;
    }

    visited.add(src);

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited)){
            return true;
        }
    }
    return false;
}


const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[],
};

breadhtFirstPrint(graph, 'a');
console.log(hasPath(graph, 'a', 'e', new Set()));


const edges = [
  ['i','j'],
    ['k','i'],
    ['n','k'],
    ['k','l'],
    ['o','n'],
];


const buildGraph = (edges) => {
  const graph = {};
    for (let edge of edges) {
        const [a,b] = edge;
        if (!(a in graph)){
            graph[a] = [];
        }
        if (!(b in graph)){
            graph[b] = [];
        }

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const unDirectPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
}
unDirectPath(edges,'j','m');


const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }
    return count;
};


const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    return true;
};

graph2 = {
    0: [4,7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
}
console.log(graph2);
connectedComponentsCount(graph2); // -> 5
console.log(connectedComponentsCount(graph2));

const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > largest) largest = size;
    }

    return largest;
};

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;

    visited.add(node);

    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
};

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([ nodeA ]);
    const queue = [[ nodeA, 0 ]];

    while (queue.length > 0) {
        const [ node, distance ] = queue.shift();

        if (node === nodeB) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([ neighbor, distance + 1 ]);
            }
        }
    }

    return -1;
};

console.log(largestComponent({
    0: ['4', '7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
})); // -> 3

const edges2 = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
];

console.log(shortestPath(edges2, 'm', 's')); // -> 6