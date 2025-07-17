import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/me.png'; // Put your image inside /src/assets/

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center bg-light text-dark" style={{ minHeight: '100vh' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-3 fw-bold mb-3">Hi, I'm Aritra</h1>
            <h4 className="mb-3" style={{ minHeight: '2.5rem' }}>
              <Typewriter
                words={['Frontend Developer', 'React Enthusiast', 'Web Designer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h4>
            <p className="lead">
              I build beautiful and responsive websites with React. I’m passionate about web performance, design,
              and writing clean code.
            </p>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <Image
              src={profileImg}
              alt="Profile"
              roundedCircle
              fluid
              className="neon-img"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
