import CinemaSeats from "./CinemaSeats";
import { useState } from "react"
import BuyButton from "./BuyButton";
import Header from "./Header";
import APIrequest from "./APIRequest";
import { Link } from "react-router-dom"

const Visitors = () => {
    const [seatUpper, setSeatUpper] = useState(0)
    const [seatLower, setSeatLower] = useState(0)
    const [seats, setSeats] = useState([])

    const [message, setMessage] = useState("")
    const [counterLower, setCounterLower] = useState(0)
    const [counterUpper, setCounterUpper] = useState(0)


    // const [reserved, setReserved] = useState(false)




    return (
        <div>
            <Header />
            <h1>Cinema Guests - Welcome!</h1>
            <APIrequest counterLower={counterLower} setCounterLower={setCounterLower} counterUpper={counterUpper} setCounterUpper={setCounterUpper} />
            <Link to={"/"}>  <h5>Back to Home</h5></Link>

        </div>
    );
}

export default Visitors;