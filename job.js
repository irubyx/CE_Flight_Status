const code = process.argv[2]

const getStatus = (code) => {
    if (code === "A") return "Preparing..."
    if (code === "B") return "In progress..."
    if (code === "C") return "Finished..."
}

console.log("XXX")
console.log("This is status of your flight: " + getStatus(code))
console.log("XXX")