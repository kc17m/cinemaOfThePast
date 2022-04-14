import APIrequest from "./APIRequest";
import BuyButton from "./BuyButton";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom"


import Header from "./Header";

import { useState } from "react"

const CinemaHosts = () => {
    const [counterLower, setCounterLower] = useState(0)
    const [counterUpper, setCounterUpper] = useState(0)

    return (<div>
        <Header />
        <h1>Cinema Host - your Dashboard</h1>
        <APIrequest counterLower={counterLower} setCounterLower={setCounterLower} counterUpper={counterUpper} setCounterUpper={setCounterUpper} />
        <Dashboard counterLower={counterLower} setCounterLower={setCounterLower} counterUpper={counterUpper} setCounterUpper={setCounterUpper} />
        <Link to={"/"}>  <h5>Back to Home</h5></Link>




    </div>);
}

export default CinemaHosts;