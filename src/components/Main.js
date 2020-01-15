import React from "react"
import ProfilePic from "../images/pic.jpeg"
import GitLogo from "../images/github.png"
import TwitLogo from "../images/twitter.png"
import LinkLogo from "../images/linkedin.png"

const Landing = () => {
    return (
        <div className="landing-div">
            <div className="title-div">
                <h1 className="title">Ferdy Macleod</h1>
                <h2 className="sub-title">Full Stack Developer</h2>
            </div>
            <p className="intro-text">I make <span>effective</span> <span>responsive</span> and <span>dynamic</span> websites</p>
        </div>
    )
}

const AboutMyself = () => {
    return (
        <div className="about-myself-wrapper">
            <h1 className="about-myself-title">About Me</h1>
            <p className="about-myself-para about-myself-para1">Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Pellentesque nec felis ex. Quisque et lacinia nulla. Phasellus aliquam ipsum 
            ac feugiat tempor.</p>
            <p className="about-myself-para about-myself-para2">Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit.</p>
        </div>
    )
}

const Profile = () => {
    return (
        <div className="profile-div">
            <img src={ProfilePic} alt="" className="profile-pic"/>
            <div className="profile-title-div">
                <h1 className="profile-title">Ferdy Macleod</h1>
                <h2 className="profile-sub-title">Full Stack Developer</h2>
            </div>
            <div className="social-icons">
                <a href="https://github.com/FerdyM"><img className="icon icon1" src={GitLogo} alt="Link to my github"/></a>
                <a href="https://www.linkedin.com/in/ferdymacleod/"><img className="icon icon2" src={LinkLogo} alt="Link to my linkedin"/></a>
                <a href="https://twitter.com/ferdymacleod1"><img className="icon icon3" src={TwitLogo} alt="Link to my twitter"/></a>
            </div>
        </div>
    )
}
const Main = () => {
    return(
        <> 
            <div className="main">
                <Landing />
                <Profile />
                <AboutMyself />
            </div>
        </>
    )
}

export default Main