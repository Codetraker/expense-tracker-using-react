import NavBar from "../Layout/NavBar";

const Home = () =>{
    return (
        <>
            <NavBar />
            <div className="homeContent">
                <h2>Welcome,</h2>
                <h1>simple way to manage finance</h1>
            </div>
        </>
    );
};
export default Home;