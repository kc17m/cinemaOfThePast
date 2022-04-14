import { useState, useEffect } from "react";

const APIrequest = (props) => {


    const [seats, setSeats] = useState([])
    // const [counterLower, setCounterLower] = useState(0)
    // const [counterUpper, setCounterUpper] = useState(0)
    const [bookedSeatsArr, setBookedSeatsArr] = useState([])
    const [newBookings, setNewBookings] = useState([])
    const [total, setTotal] = useState(0)
    // const [seatNum, setSeatNum] = useState("")
    // const [error, setError] = useState(null)
    // const [jsonArr, setJsonArr] = useState([])

    useEffect(() => {
        fetch("http://localhost:8400/cinemaseats")
            .then(response => response.json())
            .then(jsonArr => setSeats(jsonArr))
    }, [])

    const handleClick = (e) => {
        console.log(e.target.textContent, typeof e.target.textContent)
        e.target.style.color = "red";
        if (+(e.target.textContent) >= 12) {
            props.setCounterLower(props.counterLower + 1)
        }
        else {
            props.setCounterUpper(props.counterUpper + 1)
        }
    }




    // const tempObj = {
    //     "upperSeats": counterUpper,
    //     "lowerSeats": counterLower
    // }
    // console.log(newBookings)

    // setNewBookings(tempObj)

    // useEffect(() => {
    //     fetch("http://localhost:8400/updatedSeats", {
    //         headers: { "Content-Type": "application/json" },
    //         method: "POST",
    //         body: JSON.stringify(newBookings)
    //     }).then((response) => response.json())
    //         .then((newSeatsArr) => setBookedSeatsArr(newSeatsArr))
    // }, [counterUpper, counterLower])



    return (
        <>
            <section>
                <h2>API Request</h2>
                <article>

                    <h4>Tickets Lower Class: ${props.counterLower}</h4>
                    <h4>Tickets Upper Class: ${props.counterUpper}</h4>
                    <h2>Total Amount to Pay: ${props.counterLower * 10 + props.counterUpper * 15} </h2>

                </article>
                <div className="showroom" >
                    {seats.map((seat) => {
                        return (
                            <div key={seat.index}
                                className={(seat.index) > 12 ? "colorUpper" : "colorLower"}>
                                <figure>
                                    <h4 onClick={(e) => handleClick(e)} className="seatround">{seat.index}</h4>
                                </figure>
                            </div>
                        )
                    })
                    }

                </div>
                <div className="screen"><button>MOVIE SCREEN</button></div>

            </section >
            <section>

            </section>
        </>
    );
}

export default APIrequest;