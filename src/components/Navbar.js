import React, { useState } from "react"
import menuImage from "../images/menu.png"

const MenuItems = (props) => {
    const animationIn = 'menu slide-in-right'
    if (props.menuActive) {
        return (
            <ul className={animationIn}>
                <a href="/"><li className="menu-item">Home</li></a>
                <a href="/projects"><li className="menu-item">Projects</li></a>
                <a href="/"><li className="menu-item">Skills</li></a>
                <a href="/"><li className="menu-item">About</li></a>
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