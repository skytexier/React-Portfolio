import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import headshot from "../../assets/headshot.jpeg"

// Banner and rotating text ticker

const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(10 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const rotateText = ["web developer", "project leader", "geek", "good egg"];
    const period = 800;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNumber % rotateText.length;
        let fullText = rotateText[i];
        let updatedText = deleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (deleting){
            setDelta(prevDelta => prevDelta / 1.2);
        }

        if (!deleting && updatedText === fullText){
            setDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (deleting && updatedText === ''){
            setDeleting(false);
            setLoopNumber(loopNumber + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    
    


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <img className="headshot" src={headshot}></img>
                    <span className="welcome">Hello there, welcome to my portfolio!</span>
                    <h1>{`Sky is a `}<span className="txt-rotate" dataPeriod="500" data-rotate='["web developer", "project leader", "compassionate human"]'><span className="wrap">{text}</span></span></h1>
                    <p>Hey there, my name is Sky Hamilton Texier and I'm a web developer based in Santa Barbara, California. I'm an aspiring Full Stack developer with a background in Religious Studies, restaurant management and a lifelong passion for computers.
</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner;