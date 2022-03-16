const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    const playerList = players.join(" ")
    console.log(`Players: ${playerList}`)
}

const team = {
    name: "Liberty", 
    coach: "CaseyPenn",
    players: ["one", "two", "three"]
}

printTeam(team.name, team.coach, ...team.players) // spreads the array into individual arguments


let cities = ["Barceloa", "Cape Town", "Bordeaux"]

let citiesCopy = [...cities] // a good way of copying an array (that would otherwise get reassigned => copy = old)

console.log(cities)