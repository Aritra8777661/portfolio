import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Projects.css';

import image1 from '../../assets/project1.png';
import image2 from '../../assets/project2.png';
import image3 from '../../assets/project3.png';

// You can empty this array to test the "No projects yet" message
const projectData = [
  // {
  //   title: 'Portfolio Website',
  //   description: 'A modern responsive portfolio using React, Bootstrap, and Framer Motion.',
  //   image: image1,
  // },
  // {
  //   title: 'E-Commerce App',
  //   description: 'A full-stack app with user auth, product listing, cart, and payment gateway.',
  //   image: image2,
  // },
  // {
  //   title: 'Dashboard API System',
  //   description: 'Backend system using Node.js and MongoDB for managing analytics data.',
  //   image: image3,
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5" style={{ backgroundColor: '#212529' }}>
      <Container>
        <motion.h2
          className="text-center section-heading mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {projectData.length === 0 ? (
          <motion.div
            className="text-center text-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="fs-5">🚧 No projects available yet. Stay tuned!</p>
          </motion.div>
        ) : (
          <>
            <Row>
              {projectData.map((project, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <motion.div
                    className="project-card text-light h-100 neon-border overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 25px #0ff, 0 0 40px #0ff',
                      transition: { duration: 0.3 },
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} className="project-image" />
                      <div className="project-hover-overlay">
                        <Button variant="outline-info" size="sm" className="neon-button">
                          Live Preview
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h5 className="project-title text-center mb-2">{project.title}</h5>
                      <p className="project-description text-center">{project.description}</p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {projectData.length > 3 && (
              <div className="text-center mt-4">
                <Button variant="outline-info" className="neon-button px-4 py-2">
                  Explore More Projects
                </Button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default Projects;
