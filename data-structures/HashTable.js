class HashTable {
	constructor(size = 53) { // support any length, default to a prime number
		this.keyMap = new Array(size)
	}

	/**
	 * This function converts a given string into an index by using the character codes and prime numbers
	 * @param {string} key - The stringed key to hash into an index
	 * @returns {number} - An index value
	 */
	_hash(key) {
		let total = 0
		const WEIRD_PRIME = 31
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const char = key[i]
			const value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length
		}
		return Math.abs(total)
	}

	/**
	 * This function gets the value for a given key
	 * @param {string} key - The key to get the value for
	 * @returns The value or undefined if key doesn't exist
	 */
	get(key) {
		const idx = this._hash(key)
		const data = this.keyMap[idx]
		if (data) for (const kv of data) if (kv[0] === key) return kv[1]
		return undefined
	}

	/**
	 * This takes in a key-value pair, hashes the key, and stores the key-value in our
	 * array, and it uses separate chaining to handle collisions at the same index. Since keys
	 * should be unique, we check if a value for the given key exists and overwrite it if so.
	 * @param {string} key - The key to set
	 * @param {*} value - The value to set for the key
	 */
	set(key, value) {
		const idx = this._hash(key)
		if (!this.keyMap[idx]) this.keyMap[idx] = []
		const existingKeyValue = this.keyMap[idx].find(kv => kv[0] === key)
		if (existingKeyValue) existingKeyValue[1] = value
		else this.keyMap[idx].push([key, value])
	}

	/**
	 * Loops through the hash table and returns an array of keys in the table. Keys will always be unique.
	 * @returns An array of keys
	 */
	keys() {
		let keys = []
		for (let i = 0; i < this.keyMap.length; i++) {
			const data = this.keyMap[i];
			if (data) {
				for (let j = 0; j < data.length; j++) {
					const [key, value] = data[j];
					if (!keys.includes(key)) keys.push(key) // redundant check, as keys should be unique to begin with
				}
			}
		}
		return keys
	}

	/**
	 * Loops through the hash table and returns an array of values in the table. Values may no be unique,
	 * however we will only return on instance of any value and ignore dupilcates.
	 * @returns An array of values
	 */
	values() {
		let values = []
		for (let i = 0; i < this.keyMap.length; i++) {
			const data = this.keyMap[i];
			if (data) {
				for (let j = 0; j < data.length; j++) {
					const [key, value] = data[j];
					if (!values.includes(value)) values.push(value)
				}
			}
		}
		return values
	}
}


const ht = new HashTable()
ht.set('pink', '#fa00ff')
ht.set('gray', '#cccccc')
ht.set('cyan', '#50f0ff')
ht.set('purple', '#6c00ff')
ht.set('bluegreen', '#00c0dd')
ht.set('greenblue', '#19d7ce')
ht.set('black', '#000000')
console.log(ht.get('purple'))
console.log(ht.get('black')) // #000000
console.log(ht.get('orange')) // undefined
ht.set('black', 'updated')
console.log(ht.get('black')) // updated
// console.log(ht.keyMap)
const grades = new HashTable()
grades.set('Drew', 'C')
grades.set('Maira', 'A')
grades.set('Roscoe', 'B')
grades.set('Claire', 'C')
grades.set('Caroline', 'A')
grades.set('Jack', 'D')
grades.set('Jill', 'C')
console.log(grades.keyMap)
grades.keys().forEach(key => console.log(key))
grades.values().forEach(val => console.log(val))

