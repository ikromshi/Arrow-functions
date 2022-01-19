const age = 18
let msgLong

// Longer version
if (age >= 18) {
    msgLong = "You can vote"
} else {
    msgLong = "You cannot vote"
}

// Shorter version
let msg = age >= 18 ? "You can vote" : "You cannot vote"

// Arrow functions and conditionals
const myAge = 18
const showPage = () => "Showing the right page"
const showError = () => "Showing Error page"

const msg2 = myAge >= 21 ? showPage() : showError()


const team = ["Tyler", "Porter", "Ikrom", "Martin"]
team.length <= 3 ? console.log(`Team size: ${team.length}`) : console.log("Too many people on the team") 