import Header from "./Header";

const Dashboard = (props) => {

    const handleReset = () => {
        window.location.reload();
    }

    return (
        <>
            <h2>Host's Dashboard</h2>
            <section className="dashboard">
                <div>    <h2>Available Seats: </h2>
                    <h3>{24 - Number(props.counterLower) - Number(props.counterUpper)}</h3>
                </div>
                <div>
                    <h2>Earned Amount:</h2>
                    <h3>{+props.counterLower * 10 + +props.counterUpper * 15}</h3>
                </div>
            </section>
            <section>
                <button onClick={handleReset}>RESET</button>

            </section>
        </>

    );
}

export default Dashboard;