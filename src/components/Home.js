import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import "../App.css";


const Home = () => {

    const { logout } = useAuth0();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
        navigate('/');
      };

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : "#161616"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home" style={{color : "#ffffff"}}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home" style={{color: "#ffffff"}}>Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{color : "#ffffff"}}>About</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-success" type="submit" onClick={handleLogout}>Logout</button>
                    </form>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <BarChart/>
                    </div>

                    <div className="col-md-6">
                        <LineChart/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;