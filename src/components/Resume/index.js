import {Row, Col, Container} from 'react-bootstrap'

// Basic text-preview of my resume
const Resume = () => {
    return (
        <section className='resume' id='resume'>
        <Container>
        <Row className='resume-box'>
            <Col>
            <h4>Work Experience</h4>
            <h5>General Manager</h5>
            <h6>Caje Coffee Roasters | 2018-2020</h6>
            <span>Head of store operations for 3+ years covering all aspects of maintaining a small but quickly growing business (average annual revenue over one million). Accomplishments include:
Redesigned restaurant workflow, streamlined hiring operations and training procedures.
Oversaw and planned promotional events with local businesses and major institutions such as Discord and UC Santa Barbara.
 Helped to develop and refine workplace applications for product ordering, operations and training procedures.
</span>
            </Col>
            <Col>
            <h4>Education</h4>
            <h5>Certificate in Full Stack Web Development</h5>
            <h6>University of California Berkeley</h6>
            <br></br>
            <h5>Bachelor of Arts, Religious Studies</h5>
            <h6>University of California Santa Barbara | 2018-2020</h6>
            <br></br>
            <h5>Associate of Science & Associate of Arts</h5>
            <h6>Santa Barbara City College | 2016-2019</h6>
            </Col>
            <h4>Download my full resume <a href="https://www.linkedin.com/in/skytexier/" target="_blank" rel="noopener noreferrer">here!</a></h4>
        </Row>
        </Container>
        </section>
       
    )
}
export default Resume;