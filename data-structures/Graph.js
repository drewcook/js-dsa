class Node {
	constructor(val) {
		this.val = val
	}
}

/*
	This is an undirected graph.
	Our adjacency list will be a hashmap, where keys are the names of the vertices,
	and values are an array of other vertices it is connected to
*/
class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	/**
	 * This adds a new vertex to the adjacency list
	 * @param {*} name - The name of the vertex
	 */
	addVertex(name) {
		// console.log(name)
		// protect against duplicate keys
		if (!this.adjacencyList[name]) this.adjacencyList[name] = []
	}

	/**
	 * This removes a vertex from the graph if it exists. It also removes any connections
	 * to and from this vertex, ensuring there are no fragments leftover.
	 * @param {*} name - The vertex to remove from the graph
	 */
	removeVertex(name) {
		if (!this.adjacencyList[name]) throw new Error(`Cannot remove vertex, '${name}' does not exist.`)
		// O(n^2)
		// Object.entries(this.adjacencyList).forEach(([vertex, connections]) => {
		// 	this.adjacencyList[vertex] = connections.filter(e => e !== name)
		// })
		while (this.adjacencyList[name].length) {
			const adjacentVertex = this.adjacencyList[name].pop()
			this.removeEdge(name, adjacentVertex)
		}
		delete this.adjacencyList[name]
	}

	/**
	 * This adds an edge between two vertices. It will push v1 into connections for v2 and vice versa.
	 * Since this is an undirected graph, we will push a connection for both vertices, vs just one.
	 * If a vertex provided doesn't exist already, create one for it.
	 * @param {*} v1 - The first vertex
	 * @param {*} v2 - The second vertex
	 */
	addEdge(v1, v2) {
		if (!this.adjacencyList[v1]) this.addVertex(v1)
		if (!this.adjacencyList[v2]) this.addVertex(v2)
		if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2)
		if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1)
	}

	/**
	 * This removes an edge between two given vertices. If an vertex provided doesn't exist, an error occurs.
	 * The edge is only removed if the vertices contain each other in their connections.
	 * @param {*} v1 - The first vertex
	 * @param {*} v2 - The second vertex
	 * @returns Error or null if vertices provided don't exist or are the same, otherwise, void
	 */
	removeEdge(v1, v2) {
		if (v1 === v2) return
		if (!this.adjacencyList[v1]) throw new Error(`Vertex '${v1}' does not exist in the graph.`)
		if (!this.adjacencyList[v2]) throw new Error(`Vertex '${v2}' does not exist in the graph.`)
		if (this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e !== v2)
		if (this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e !== v1)
	}

	/**
	 * This function traverses the graph depth-first recursively, starting from a given node. It marks each node
	 * visited, then uses recursion by checking against any neighbor nodes that aren't marked visited
	 * and calling the recursive helper function again on that node.
	 * @param {*} startingVertex - The starting node to traverse from
	 * @returns - A list of the visited nodes in the order they were traversed
	 */
	dfsRecursive(startingVertex) {
		const results = []
		const visited = {} // an object is faster to access vs an array
		const adjacencyList = this.adjacencyList
		function dfs(v) {
			if (!v) return // safe guard for if/when a starting node doesn't exist in graph
			results.push(v)
			visited[v] = true
			adjacencyList[v].forEach(neighbor => {
				if (!visited[neighbor]) return dfs(neighbor)
			})
		}
		dfs(startingVertex)
		return results
	}

	/**
	 * This function traverses the graph depth-first iteratively, starting from a given node. It uses a stack to keep track
	 * of what nodes to visit next. We use an object to keep track of visited nodes. We remove from the stack, then if the neighbor for
	 * node in the stack we remove hasn't been visited, we add them to the stack and mark them visited. We continue until we visit
	 * all nodes in the stack. The stack acts as a data structure to help manage this, and we use it iteratively in a while loop.
	 * @param {*} startingVertex - The starting node to traverse from
	 */
	dfsIterative(startingVertex) {
		if (!this.adjacencyList[startingVertex]) throw new Error(`Cannot traverse from starting vertex '${startingVertex}', as it does not exist.`)
		const results = []
		const visited = {}
		const stack = [startingVertex] // simple implementation, could use our own class as well
		visited[startingVertex] = true
		while (stack.length > 0) {
			// LIFO, essentially working from the end of the adjacency list since they're pushed on in order from line 117
			let visitingVertex = stack.pop()
			results.push(visitingVertex)
			this.adjacencyList[visitingVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					stack.push(neighbor)
				}
			})
		}
		return results
	}

	bfs(startingVertex) {
		if (!this.adjacencyList[startingVertex]) throw new Error(`Cannot traverse from starting vertex '${startingVertex}' as it does not exist.`)
		const results = []
		const visited = {}
		const queue = [startingVertex] // simple implementation, can use our own class as well
		visited[startingVertex] = true
		while (queue.length > 0) {
			// FIFO
			let visitingVertex = queue.shift()
			results.push(visitingVertex)
			this.adjacencyList[visitingVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					queue.push(neighbor)
				}
			})
		}
		return results
	}
}

const airports = new Graph()
// add vertices
airports.addVertex('SFO')
airports.addVertex('JFK')
airports.addVertex('DEN')
airports.addVertex('MSY')
airports.addVertex('DEN')
// add edges
airports.addEdge('DEN', 'JFK')
airports.addEdge('MSY', 'JFK')
airports.addEdge('MSY', 'SFO')
airports.addEdge('DFW', 'SFO')
airports.addEdge('SFO', 'LAX')
airports.addEdge('DEN', 'SFO')
airports.addEdge('DEN', 'SFO')
airports.addEdge('SEA', 'DEN')
airports.addEdge('SEA', 'PHX')
airports.addEdge('PHX', 'DEN')
airports.removeEdge('SFO', 'MSY')
airports.removeEdge('DEN', 'MSY') // no edge exists, nothing occurs
airports.removeVertex('SFO')
console.log(airports.adjacencyList)
let traversed = airports.dfsRecursive('DEN')
console.log('airports recursive DFS', traversed)
traversed = airports.bfs('MSY')
console.log('airports BFS', traversed)

/*==================
				A
			/		\
	 	 B 		 C
		|			 |
		D ---- E
		 \		/
			 F
==================*/
const letters = new Graph()
letters.addVertex('A')
letters.addVertex('B')
letters.addVertex('C')
letters.addVertex('D')
letters.addVertex('E')
letters.addVertex('F')
letters.addEdge('A', 'B')
letters.addEdge('A', 'C')
letters.addEdge('B', 'D')
letters.addEdge('C', 'E')
letters.addEdge('D', 'E')
letters.addEdge('D', 'F')
letters.addEdge('E', 'F')
console.log(letters.adjacencyList)
traversed = letters.dfsRecursive('A')
console.log('letters recursive DFS', traversed)
traversed = letters.dfsIterative('A')
console.log('letters iterative DFS', traversed)
traversed = letters.bfs('A')
console.log('letters BFS', traversed)



