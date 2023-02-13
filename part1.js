const depthFirstPrint = (graph, source) => {
    console.log(source);
    for (let graphElement of graph[source]) {
        depthFirstPrint(graph, graphElement);
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