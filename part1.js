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

const hasPath = (graph, src, dst) => {
  const queue = [ src ];
    while (queue.length > 0){
        const current = queue.shift();
        if (current === dst){
            return true;
        }
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
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
console.log(hasPath(graph, 'a', 'e'));