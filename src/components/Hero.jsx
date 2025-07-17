import React, { useContext } from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import profileImg from '../assets/me.png';
import ParticlesBackground from './ParticlesBackground'; // <- Make sure to create this component

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="hero"
      className={`d-flex align-items-center position-relative overflow-hidden ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ minHeight: '90vh' }}
    >

      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Left Text Section */}
          <Col xs={12} md={7} className="text-center text-md-start mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="display-1 fw-bold mb-4">Hi, I'm Aritra</h1>
              <h3 className="mb-4">
                <Typewriter
                  words={['Full Stack Developer', 'React Enthusiast', 'Web Designer']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
              <p className="lead fs-5">
                I build beautiful and responsive websites with React.
                I’m passionate about web performance, design, and writing clean code.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-4 mt-5">
                <ScrollLink to="projects" smooth={true} duration={800}>
                  <Button className="neon-btn px-4 py-2 fs-5">View My Work</Button>
                </ScrollLink>
                <a href="/resume.pdf" download className="neon-btn btn btn-outline-info px-4 py-2 fs-5">
                  Download Resume
                </a>
              </div>

              {/* Social Media Icons */}
              <motion.div
                className="d-flex gap-3 mt-4 social-icons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="neon-icon">
                  <FaGithub size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="neon-icon">
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="neon-icon">
                  <FaTwitter size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Image Section */}
          <Col xs={12} md={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={profileImg}
                alt="Profile"
                roundedCircle
                fluid
                className="neon-img"
                style={{ width: '85%', objectFit: 'cover' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Scroll Down Indicator */}
      <ScrollLink to='about' smooth={true} duration={800}>
        <motion.div
          className="scroll-down-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
        >
          <MdKeyboardArrowDown className="scroll-arrow-icon" />
        </motion.div>
      </ScrollLink>
    </section>
  );
};

export default Hero;
