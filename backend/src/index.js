const express = require("express")
const SeatsAPI = require("./jsondata")
const { nanoid } = require("nanoid")

const dotenv = require("dotenv")
dotenv.config()

const multer = require("multer")

const cors = require("cors")
const { body, validationResult } = require("express-validator")

const { readDashboard, writeDashboard } = require("./dashboard.js")

const PORT = 8400
const app = express()

const seatsArr = []

const allSeatsArr = SeatsAPI(process.env.API_CINEMA_KEY)
const api_key = process.env.API_CINEMA_KEY
console.log("your API key", api_key)

app.use(cors())

app.use((req, _, next) => {
    console.log("new request –", req.method, req.url)
    next()
})
//middleware test
app.get("/", (_, res) => {
    res.send("sieht man mich?")
})

app.get("/cinemaseats", (req, res) => {
    console.log(req.query)
    const seatNum = req.query.index
    const categorySearch = req.query.category
    const costSearch = req.query.price
    const bookedSearch = req.query.booked

    let filteredSeatInfo = allSeatsArr

    if (seatNum) {
        filteredSeatInfo = filteredSeatInfo.filter(seat => seat.index == seatNum)
    }
    if (categorySearch) {
        filteredSeatInfo = filteredSeatInfo.filter(seat => seat.category == categorySearch)
    }
    if (costSearch) {
        filteredSeatInfo = filteredSeatInfo.filter(seat => seat.price == costSearch)
    }
    if (bookedSearch) {
        filteredSeatInfo = filteredSeatInfo.filter(seat => seat.booked == bookedSearch)
    }
    res.json(filteredSeatInfo)
}
)

app.post("/updatedSeats", (req, res) => {
    console.log(req.body)
    const bookedSeats = {
        upperSeats: req.body.counterUpper,
        lowerSeats: req.body.counterLower
    }
    seatsArr.push(bookedSeats)
    res.json(seatsArr)
})


//middleware test
app.use((_, res) => {
    res.status(404).json({ err: "Not found." })
})

app.listen(PORT, () => console.log("Server is listening on Port", PORT))