import React from "react"
import Navbar from "./Navbar"
import GitLogo from "../images/github.png"
import Pic from "../images/pic.jpeg"

const ExampleProject = {
    title: "VisualSort",
    images: [GitLogo, Pic],
    text: 'this is just example placeholder text im using in order to make an example',
    techStack: ['Link to react logo', 'link to js logo', 'you get the point']
}

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="projects-main">
                <h1 className="projects-title">{ExampleProject.title}</h1>
                <ProjectCard example={ExampleProject} />
            </div>
        </>
    )
}

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.example.images[0]} alt="" className="project-img"/>
            <div className="img-selector-wrapper"></div>
            <p className="project-text">{props.example.text}</p>
            <div className="tech-stack-icons-wrapper"></div>
            <div className="project-buttons-wrapper">
                <button className="project-button project-button1"></button>
                <button className="project-button project-button2"></button>
            </div>
        </div>
    )
}

export default Projects