
import React, { useState } from 'react';
import "./navbar.css"
import logo from "../../images/logo.png"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom"
import axios from "axios"

function Navbar() {

    const [active, setActive] = useState(0)
    
    const clicked = () => {
        setActive(!active)
    }

    const handleHi = async () => {
        await axios.post("/api/hi");
    }

    return (
        <>
            <div className={active == 0 ? "navContainer" : "navContainer centeredDisplay"}>
                <div className='logoContainer'>
                    <img src={logo}></img>
                </div>

                <div className={active == 0 ? 'navLinksContainer' : "navLinksContainer blockDisplay"}>
                    {active == 0 ? <div style={{marginRight: "30px"}} onClick={clicked} className="hamburger"><MenuIcon /></div> : <div onClick={clicked} className="hamburger"><CloseIcon /></div>}
                    <Link to="/" style={{textDecoration: "none", color: "#757575"}}>
                        <div className={active == 0 ? 'navLink drop' : "navLink"}>Home</div>
                    </Link>
                    <Link to="/about" style={{textDecoration: "none", color: "#757575"}}>
                        <div className={active == 0 ? 'navLink drop' : "navLink"}>About</div>
                    </Link>
                    <Link to="/winterSchool" style={{textDecoration: "none", color: "#757575"}}>
                        <div className={active == 0 ? 'navLink drop' : "navLink"}>Events</div>
                    </Link>
                    <div onClick={() => {alert("Coming soon")}} className={active == 0 ? 'navLink drop' : "navLink"}>Contact Us</div>
                    <button onClick={() => {handleHi(); alert("Coming soon")}} className={active == 0 ? 'memberButton drop' : "memberButton"}>Become a member</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;