const log = require('../utils/log')
const PriorityQueue = require('./PriorityQueue')

class Node {
	constructor(val) {
		this.val = val
	}
}

class SimplePriorityQueue {
 constructor() {
  this.values = []
 }
 enqueue(val, priority) {
  this.values.push({ val, priority })
  this.sort()
 }
 dequeue() {
  return this.values.shift()
 }
 sort() {
  this.values.sort((a, b) => a.priority - b.priority)
 }
}

/*
	This is an undirected, weighted graph.
	Our adjacency list will be a hashmap, where keys are the names of the vertices, and values
	are an array of objects with two properties, the vertex it is connected to, and its weight.

	ADJACENCY LIST STRUCTURE:
		{
			'A': [{ vertex: 'B', weight: 10 }]
			'B': [{ vertex: 'A', weight: 10 }, { vertex: 'C', weight 5 }]
			'C': [{ vertex: 'B', weight: 5 }]
		}
*/
class WeightedGraph {
	constructor() {
		this.adjacencyList = {}
	}

	/**
	 * This adds a new vertex to the adjacency list
	 * @param {*} name - The name of the vertex
	 */
	addVertex(name) {
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
		while (this.adjacencyList[name].length) {
			const adjacentVertex = this.adjacencyList[name].pop()
			this.removeEdge(name, adjacentVertex.vertex)
		}
		delete this.adjacencyList[name]
	}

	/**
	 * This adds an edge between two vertices. It will push v1 into connections for v2 and vice versa. along with the given weight.
	 * Since this is an undirected graph, we will push a connection for both vertices, vs just one.
	 * Since this is a weighted graph, we will need to assign a weight to each edge.
	 * If a vertex provided doesn't exist already, create one for it.
	 * @param {*} v1 - The first vertex
	 * @param {*} v2 - The second vertex
	 * @param {number} weight - The weight of the edge
	 */
	addEdge(v1, v2, weight) {
		if (!this.adjacencyList[v1]) this.addVertex(v1)
		if (!this.adjacencyList[v2]) this.addVertex(v2)
		if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push({ vertex: v2, weight })
		if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push({ vertex: v1, weight })
	}

	/**
	 * This removes an edge between two given vertices. If an vertex provided doesn't exist, an error occurs.
	 * The edge is only removed if the vertices contain each other in their connections.
	 * @param {*} v1 - The first vertex name
	 * @param {*} v2 - The second vertex name
	 * @returns Error or null if vertices provided don't exist or are the same, otherwise, void
	 */
	removeEdge(v1, v2) {
		if (v1 === v2) return
		if (!this.adjacencyList[v1]) throw new Error(`Vertex '${v1}' does not exist in the graph.`)
		if (!this.adjacencyList[v2]) throw new Error(`Vertex '${v2}' does not exist in the graph.`)
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e.vertex !== v2)
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e.vertex !== v1)
	}

	/**
	 * This function uses Dijkstra's Algorithm to find the shortest path between two given vertices.
	 * It leverages a priority queue to help determine which node to visit next within our loop.
	 * @param {key} startingVertex - The name of the vertex to start from
	 * @param {key} endingVertex -The name of the vertex to end at
	 * @returns
	 */
	findShortestPath(startingVertex, endingVertex) {
		// Setup
		// const pq = new SimplePriorityQueue() // slower, using array and due to .sort() happening each time
		const pq = new PriorityQueue() // quicker, using a binary heap
		const distances = {}
		const previous = {}
		let path = [] // return at end
		let smallest;
		for (let vertex in this.adjacencyList) {
			const value = vertex === startingVertex ? 0 : Infinity
			pq.enqueue(vertex, value)
			distances[vertex] = value
			previous[vertex] = null
		}
		// Loop while we still have a priority queue
		while (pq.values.length) {
			smallest = pq.dequeue().val
			if (smallest === endingVertex) {
				// We're done
				// Build up path to return at end
				while (previous[smallest]) {
					path.push(smallest)
					smallest = previous[smallest]
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					// find neighboring node of 'smallest'
					let { vertex: nextNeighbor, weight: nextWeight } = this.adjacencyList[smallest][neighbor]
					// calculate sum for next neighbor by adding its weight
					// to the current distance of our current node
					let shortestDistanceCandidate = (distances[smallest] === Infinity ? 0 : distances[smallest]) + nextWeight
					// if this new neighbor distance smaller than currently stored distance for this neighbor,
					// update distances table and update the previous chart to set the shortest distance for
					// said neighbor to be smallest node from queue
					if (shortestDistanceCandidate < distances[nextNeighbor]) {
						distances[nextNeighbor] = shortestDistanceCandidate
						// how we got to neighbor
						previous[nextNeighbor] = smallest
						// continue to narrow down
						pq.enqueue(nextNeighbor, shortestDistanceCandidate)
					}
				}
			}
		}
		// construct output return the list of nodes that create the shortest path, in order
		return path.concat(smallest).reverse()
	}
}

// testing the weighted graph
const geomap = new WeightedGraph()
geomap.addEdge('Denver', 'Ft. Collins', 80)
geomap.addEdge('Boulder', 'Denver', 25)
geomap.addEdge('Greeley', 'Denver', 60)
geomap.addEdge('Greeley', 'Ft. Collins', 35)
geomap.addEdge('Boulder', 'Longmont', 15)
geomap.addEdge('Golden', 'Boulder', 20)
geomap.addEdge('Denver', 'Golden', 10)
log(geomap.adjacencyList)

// Find the shortest path from A to E
const graph = new WeightedGraph()
graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('D', 'C', 2)
graph.addEdge('D', 'F', 1)
graph.addEdge('D', 'E', 3)
graph.addEdge('C', 'F', 4)
graph.addEdge('E', 'F', 1)
graph.addEdge('E', 'B', 3)
log(graph.adjacencyList)
let path = graph.findShortestPath('A', 'E')
log(path)
path = graph.findShortestPath('A', 'F')
log(path)
path = graph.findShortestPath('D', 'E')
log(path)
path = graph.findShortestPath('B', 'F')
log(path)

