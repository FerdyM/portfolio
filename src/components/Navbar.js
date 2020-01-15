import React, { useState } from "react"
import menuImage from "../images/menu.png"

const MenuItems = (props) => {
    const animationIn = 'menu slide-in-right'
    // const animationOut = 'menu slide-out-right'
    if (props.menuActive) {
        return (
            <ul className={animationIn}>
                <li className="menu-item">Home</li>
                <li className="menu-item">Projects</li>
                <li className="menu-item">Skills</li>
                <li className="menu-item">About</li>
            </ul>
        )
    } else {
        return false
    }
}

const Navbar = () => {
    const [menuActive, setMenuActive] = 
    useState(false)

    return (
        <>
            <div className="navbar">
                <div className="menu-div" id="menu-div" onClick={() => {
                    setMenuActive(!menuActive)
                }}>
                    <img className="menu-icon" alt="" src={menuImage}/>
                </div>  
            </div>
            <MenuItems menuActive={menuActive} />
        </>
    )
}



export default Navbar