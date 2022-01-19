// Cannot use arrow functions with the variable arguments and with functions inside a dict ("this" is not supported)
const add = function(a, b) {
    console.log(arguments)
    return arguments[0] + arguments[2]
    
}

console.log(add(11, 22, 33, 44))