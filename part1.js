const depthFirstPrint = (graph, source) => {
  const stack = [ source ];
  while (stack.length > 0){
      const current = stack.pop();
      console.log(current);

      for (let graphElement of graph[current]) {
          stack.push(graphElement);
      }
  }
}


const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[],
};

depthFirstPrint(graph, 'a');