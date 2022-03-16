const todo = {
    id: "ldfnwkfn",
    text: "greetings",
    completed: false
}


// const text = todo.text
// const completed = todo.completed

// const { text, completed } = todo
const { text:todoText, completed, details = "No details provided" } = todo // details = "No details" -- doesn't add new property to obj



console.log(todoText)
console.log(completed)
console.log(todo)