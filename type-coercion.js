// Type Coercion -> a string, a number, a boolean
console.log("5" + 5) // Will print "55"
console.log("5"-5) // Will print 0

// Using == doesn't check for type
console.log("5" === 5)

// Use type of to check for types
console.log(typeof {})

// true changes into 1, false changes into 0
const value = true + 2
const type = typeof value
console.log(value)
console.log(type)

// Another example with 0 equaling false
console.log(0 == false)