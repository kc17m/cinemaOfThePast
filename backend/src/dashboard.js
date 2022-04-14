const fs = require("fs")

const jsonPath = __dirname + "/../data/seats.json"

function readDashboard() {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            const jsonString = data.toString()
            const dashboardData = JSON.parse(jsonString)

            resolve(dashboardData)
        })
    })
}

function writeDashboard(dashboardArray) {
    return new Promise((resolve, reject) => {
        const jsonString = JSON.stringify(dashboardArray, null, 2)
        fs.writeFile(jsonPath, jsonString, (err) => {
            if (err) reject(err)
            else resolve(dashboardArray)
        })
    })
}

module.exports = {
    readDashboard,
    writeDashboard
}