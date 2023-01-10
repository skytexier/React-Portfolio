import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function About() {
    return (
      <section className="banner" id="home">
        <Container>
          <div className='profile-img m-5'>
            
          </div>
          <Row className='align-items-center'>
            <Col xs={12} md={6} lg={4}>
              <span className='intro'>Welcome to my portfolio!</span>
              <h1>Sky Hamilton Texier</h1>
              <p>Hello there! My name is Sky and I'm an aspiring fullstack web developer.  </p>
            </Col>
          </Row>

        </Container>
      </section>
    );
  }
  
  export default About;
  