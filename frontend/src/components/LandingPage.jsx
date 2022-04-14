import { Link } from "react-router-dom"
import Header from "./Header";



const LandingPage = () => {
    return (<div>
        <Header />
        <Link to={"/hosts"}> <h1>Section for Cinema Host</h1></Link>
        <Link to={"/guests"}> <h1>Section for Cinema Visitors </h1></Link>
    </div>);
}

export default LandingPage;