import React , {useState , useEffect} from 'react';
import "./NavBar.css";

function NavBar() {

    const [show , handleShow]= useState(false);

    const transitionNavBar = () =>{
        if (window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll" , transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar)
    } , [] )

    return (
        <div className={`nav ${!show && "nav__black"}`}>
            <div className="nav__contents">

                <img 
                src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png"
                className="nav__logo"
                />

                <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                className="nav__avatar"
                />
            </div>



            
        </div>
    )
}

export default NavBar
