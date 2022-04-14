import { useEffect, useState } from "react"
import APIrequest from "./APIRequest"


const CinemaSeats = () => {

    const [seatUpper, setSeatUpper] = useState(0)
    const [seatLower, setSeatLower] = useState(0)
    // const [reserved, setReserved] = useState(false)
    const [message, setMessage] = useState("")
    const [lowerCounter, setLowerCounter] = useState(0)
    const [upperCounter, setUpperCounter] = useState(0)



    // const incrementUpper = (e) => {
    //     // setSeatUpper(seatUpper + 15)
    //     // e.target.style.color = "red"
    //     // console.log(e.target.value)
    //     // setReserved(true)
    //     // setUpperCounter(upperCounter + 1)

    // }
    // const incrementLower = (e) => {
    //     if (e.target.style.color = "#e4e48d") {
    //         setSeatLower(seatLower + 10)
    //         e.target.style.color = "red"
    //         // setReserved(true)
    //         setLowerCounter(lowerCounter + 1)
    //         console.log("if statement")

    //     }
    //     else if (e.target.style.color = "red") {
    //         setSeatLower(seatLower - 10)
    //         //setReserved(false)
    //         setLowerCounter(lowerCounter - 1)
    //         e.target.style.color = "#e4e48d"
    //         console.log("komm ich hier rein? else if")
    //     }
    //     console.log(e.target, e.target.style.color, e.target.id)///!!! klappt nicht für weitere Klicks!!!
    // }

    useEffect(() => {
        if ((lowerCounter >= 12) || (upperCounter >= 12)) {
            setMessage("All Seats have been reserved in this category")
        }

    })



    return (<div>
        <h1>Cinema Showroom</h1>
        <h3>Cost per Seat Lower Class: 10$</h3>
        <h3>Cost per Seat Upper Class: 15$</h3>
        <h2>Ticket Price total: {seatLower + seatUpper}$</h2>
        <h2>LowerClass booked: {lowerCounter}, left: {12 - lowerCounter}, UpperClass booked: {upperCounter}, left: {12 - upperCounter}</h2>

        <h2>{message}</h2>
        <APIrequest />
        <main className="cinemaSeats">

            <div className="screen"><button>MOVIE SCREEN</button></div>
        </main>




    </div >);
}

export default CinemaSeats;