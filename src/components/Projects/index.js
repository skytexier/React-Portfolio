import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "../ProjectCard";
import projectImg1 from "../../assets/FFA.png"
import projectImg2 from "../../assets/safespace.JPG";

const Projects = () => {
    const projects = [
        {
            title: "Fantasy Football Calculator",
            description: "An easy to navigate website for calculating weekly Fantasy Football scores and checking in on NFL news",
            imgURL: projectImg1,
            URL:"https://brackym.github.io/UCBCS_FFCalculator/"
        },
        {
            title: "The Safe Space",
            description: "A Twitter/Reddit-esque social media website",
            imgURL: projectImg2,
            URL: "https://the-safer-space.herokuapp.com/"
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
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