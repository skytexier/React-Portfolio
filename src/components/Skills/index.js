import { Container, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import css from '../../assets/skillsSVG/css.svg';
import apollo from '../../assets/skillsSVG/apollo.svg';
import html from '../../assets/skillsSVG/html.svg';
import java from '../../assets/skillsSVG/java.svg';
import jquery from '../../assets/skillsSVG/jquery.svg';
import node from '../../assets/skillsSVG/node.svg';
import react1 from '../../assets/skillsSVG/react.svg';
import sql from '../../assets/skillsSVG/sql.svg';
import mongo from '../../assets/skillsSVG/mongo.png';

//Importing SVG images/icons for skills and technologies, setting responsiveness for react-multi-carousel

 const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // Breakpoints for the carousel.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return (
        <section className="skills" id="skills">
            <Container>
                <Col className="skill-box">
                <h2>Skills and Technologies</h2>
                <Carousel responsive={responsive} infinite={true} className="carousel">
                    <div className="item">
                        <img src={apollo} alt="skill"/>
                        <h4>Apllo / GraphQL</h4>
                    </div>
                    <div className="item">
                        <img src={node} alt="skill"/>
                        <h4>Node.js</h4>
                    </div>
                    <div className="item">
                        <img src={mongo} alt="skill"/>
                        <h4>MongoDB</h4>
                    </div>
                    <div className="item">
                        <img src={css} alt="skill"/>
                        <h4>CSS</h4>
                    </div>
                    <div className="item">
                        <img src={html} alt="skill"/>
                        <h4>HTML5</h4>
                    </div>
                    <div className="item">
                        <img src={java} alt="skill"/>
                        <h4>JavaScript</h4>
                    </div>
                    <div className="item">
                        <img src={jquery} alt="skill"/>
                        <h4>jQuery</h4>
                    </div>
                    <div className="item">
                        <img src={react1} alt="skill"/>
                        <h4>React</h4>
                    </div>
                    <div className="item">
                        <img src={sql} alt="skill"/>
                        <h4>MySQL</h4>
                    </div>
                </Carousel>
                </Col>
            </Container>
        </section>
    )
 }

 export default Skills