import React from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css"
function NavBar()
{
    function handleClick()
    {
       const a=document.querySelector(".navbar")
       a.classList.toggle("toggle")
    }
    return(
        <>
        <div className="bar">
            <div className="Siren">
                <span id="the">The</span>
                <span id="only-siren">Siren</span>
            </div>
            <div className="filter-bar"><i className="fa fa-bars" aria-hidden="true" onClick={handleClick}></i></div>
        </div>
        <div className="navbar toggle">
        <div className="navbar-spacing"><NavLink to="/">Home</NavLink></div>
        <div className="navbar-spacing"><NavLink to="/category/Bollywood">Bollywood</NavLink></div>
        <div className="navbar-spacing"><NavLink to="/category/Technology">Technology</NavLink></div>
        <div className="navbar-spacing"><NavLink to="/category/Hollywood">Hollywood</NavLink></div>
        <div className="navbar-spacing"><NavLink to="/category/Fitness">Fitness</NavLink></div>
        <div className="navbar-spacing"><NavLink to="/category/Food">Food</NavLink></div>
        </div>
        <div className="border-only"></div>
        </>
    )
}
export default NavBar