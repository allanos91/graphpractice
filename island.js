function getNeighbors(row, col, graph) {
  let neighbors = [];

  // Check top
  if(row - 1 >= 0 && 
    graph[row - 1][col] === 1){
    neighbors.push([row - 1, col])
  }

  // Check bottom
  if(row + 1 < graph.length && 
    graph[row + 1][col] === 1)
    {
      neighbors.push([row + 1, col])
    }
  

  // Check left
  if(col > 0 && 
    graph[row][col - 1] === 1)
    {
      neighbors.push([row, col - 1])
    }

  // Check right

  if(col < graph[row].length && 
    graph[row][col + 1] === 1)
    {
      neighbors.push([row, col + 1])
    }

  // Return neighbors
  return neighbors;

  // Your code here 
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`);

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while(stack.length > 0){

    // Pop the first node
     let firstNode = stack.pop();

    // DO THE THING (increment size by 1)
     size++;
    console.log(firstNode);
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    let neighbors = getNeighbors(...firstNode, graph)
  
    for(let n of neighbors){
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
      if(!visited.has(`${n[0]}, ${n[1]}`)){
        stack.push(n);
        visited.add(`${n[0]}, ${n[1]}`);
      }
    }
  }
  // return size
  return size;

  // Your code here 
}

module.exports = [getNeighbors, islandSize];
