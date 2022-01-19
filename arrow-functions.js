// Regular longer version
const squareLong = num => {
    return num * num
}

// Shorter version
const square = (num) => num * num

console.log(square(5))


const people = [{
    name: "Ikrom",
    age: 18
}, {
    name: "Andrew",
    age: 31
}, {
    name: "Jess",
    age: 22
}]

// Doing it the regular way
const underThirtyLong = people.filter(function(person) {
    return person.age < 30
})

// Not using the callback function inside .filter since there is already an arrow function
const underThirty = people.filter((person) => person.age < 30)
console.log(underThirty)

// Getting the name of someone 18 years old
const eighteen = people.find(person => person.age === 18)
console.log(`${eighteen.name} is 18 years old!`)