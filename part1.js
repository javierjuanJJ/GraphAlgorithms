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
  if (src === dst){
      return true;
  }

    for (let neighbor of graph[src]) {
        if (hasPath(graph, src, dst) === true){
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
console.log(hasPath(graph, 'a', 'e'));