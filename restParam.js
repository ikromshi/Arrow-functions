const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    const playerList = players.join(" ")
    console.log(`Players: ${playerList}`)
}

printTeam("Liberty", "CaseyPenn", "one", "two", "three")