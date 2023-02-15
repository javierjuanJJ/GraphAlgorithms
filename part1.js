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