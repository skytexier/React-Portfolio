import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import projectImg1 from "../../assets/FFA.png";
import projectImg2 from "../../assets/safespace.JPG";
import projectImg3 from "../../assets/workdb.png";
import projectImg4 from "../../assets/users.png";
import projectImg5 from "../../assets/jate.png";
import projectImg6 from "../../assets/bazaar-buddies.png";
import {FaGithub, FaLink } from  "react-icons/fa"

const Projects = () => {
    const projects = [
        {
            title: "Fantasy Football Calculator",
            description: "An easy to navigate website for calculating weekly Fantasy Football scores and checking in on NFL news",
            imgURL: projectImg1,
            URL: "https://skytexier.github.io/UCBCS_FFCalculator/",
            Github: "https://github.com/skytexier/UCBCS_FFCalculator",
        },
        {
            title: "The Safe Space",
            description: "A Twitter/Reddit-esque social media website",
            imgURL: projectImg2,
            URL: "https://the-safer-space.herokuapp.com/",
            Github: "https://github.com/skytexier/UCBC_SafeSpace"
        },
        {
            title: "Work Team  DB Builder",
            description: "A SQL database for company salaries, roles, departments and so on",
            imgURL: projectImg3,
            Github: "https://github.com/skytexier/Workforce-Database"
        },
        {
            title: "Mongo Social Network",
            description: "The backend of a social media platform built with Mongodb, Express and Node",
            imgURL: projectImg4,
            Github: "https://github.com/skytexier/NoSQL-Social-Network-API"
        },
        {
            title: "PWA Text Editor",
            description: "A PWA text editor made using JavaScript and IndexedDB",
            imgURL: projectImg5,
            URL: "https://pwa-p.herokuapp.com/",
            Github: "https://github.com/skytexier/PWA-Text-Editor"
        },
        {
            title: "Bazaar Buddies",
            description: "An e-commerce platform made using GraphQL, React, MongoDB and Apollo",
            imgURL: projectImg6,
            Github: "https://github.com/skytexier/Bazaar-Buddies"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row flex>
                    <Col size={12}>
                    <h2>Projects</h2>
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Projects;