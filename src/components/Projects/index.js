import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "../ProjectCard";
import projectImg1 from "../../assets/FFA.png"
import projectImg2 from "../../assets/safespace.JPG";

const Projects = () => {
    const projects = [
        {
            title: "Fantasy Football Calculator",
            description: "An easy to navigate website for calculating weekly Fantasy Football scores and checking in on NFL news",
            imgURL: projectImg1
        },
        {
            title: "The Safe Space",
            description: "A Twitter/Reddit-esque social media website",
            imgURL: projectImg2
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Projects;