import React, { useState } from "react"
import menu from "../images/menu.png"

const MenuItems = (props) => {
    if (props.active) {
        return (
            <ul className="menu">
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
    const [active, setActive] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="menu-div" id="menu-div" onClick={() => {
                    setActive(!active)
                    if (active) {
                        console.log('triggered')
                    }
                }}>
                    <img className="menu-icon" alt="" src={menu}/>
                </div>  
            </div>
            <MenuItems active={active}/>
        </>
    )
}



export default Navbar