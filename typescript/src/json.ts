type Primitive = string | number | boolean | null
type JSONArray = JSONValue[]
type JSONObject = { [k: string]: JSONValue }
type JSONValue = Primitive | JSONArray | JSONObject

function isJSON(arg: JSONValue) {
	try {
		const str: string = JSON.stringify(arg)
		const json: JSONValue = JSON.parse(str)
		if (json) return true
	} catch {
		return false
	}
}

// Valid
isJSON('hello')
isJSON({ hello: 'world', keys: [1, 2, 3, null, false] })

// Invalid
// @ts-expect-error
isJSON(() => '')
// @ts-expect-error
isJSON(undefined)
