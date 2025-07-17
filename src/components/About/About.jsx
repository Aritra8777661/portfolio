import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaCode, FaUsers, FaLaptopCode, FaProjectDiagram, FaUserFriends, FaChartLine } from 'react-icons/fa';
import './About.css';

const timelineData = [
  {
    year: '2020',
    title: 'Started Web Design Journey',
    description: 'Began exploring the world of web design. Learned HTML, CSS, and UI fundamentals. Built simple yet visually engaging static websites.',
  },
  {
    year: '2022',
    title: 'Full Stack Web Development Journey Begins',
    description: 'Expanded into JavaScript, Node.js, MongoDB, and React. Built dynamic, database-driven applications and gained strong backend skills.',
  },
  {
    year: '2023',
    title: 'Full Stack Developer at Softech ERP Solutions Pvt Ltd',
    description: 'Worked on large-scale enterprise applications. Gained hands-on experience in building scalable solutions and integrating complex APIs.',
  },
  {
    year: '2024',
    title: 'React Specialist & UI Enthusiast',
    description: 'Focused on crafting high-performance user interfaces using React, Bootstrap, and advanced UI libraries. Prioritized UX and responsiveness.',
  },
  {
    year: '2025',
    title: 'Started Mobile App Development Journey',
    description: 'Ventured into mobile app development using React Native. Built and deployed cross-platform apps focusing on performance, UI/UX, and real-world use cases.',
  }
];


const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node', level: 85 },
  { name: 'MongoDB', level: 85 },
  { name: 'MySQL', level: 85 },
  { name: 'Php', level: 85 },
  { name: 'Redux', level: 80 },
  { name: 'Bootstrap', level: 85 },
  { name: 'React Bootstrap', level: 75 },
  { name: 'TailwindCSS', level: 75 },
  { name: 'Material UI', level: 75 },
  { name: 'React Native', level: 75 },
  { name: 'Git', level: 90 },
  { name: 'REST API', level: 80 },
];

const values = [
  { icon: <FaLightbulb />, label: 'Creative Thinker' },
  { icon: <FaRocket />, label: 'Fast Learner' },
  { icon: <FaCode />, label: 'Clean Coder' },
  { icon: <FaUsers />, label: 'Team Player' },
];

const highlights = [
  { icon: <FaLaptopCode />, title: '2+ Years', subtitle: 'Coding Experience' },
  { icon: <FaProjectDiagram />, title: '0 Project', subtitle: 'Completed' },
  { icon: <FaUserFriends />, title: 'Independent Developer', subtitle: 'and Team Collaborator' },
  { icon: <FaChartLine />, title: '100k+', subtitle: 'User Reach' },
];

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <motion.h2 className="text-center section-heading mb-5" initial={{opacity: 0, y: -30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}}>
          About Me
        </motion.h2>

        <motion.p className="text-center fs-5 mb-5 about-intro" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6}} viewport={{once: true}}>
          I’m a passionate frontend developer with a love for clean, efficient code and beautiful UI/UX.
        </motion.p>

        <Row className="align-items-start mb-5">
          <Col md={12}>
            <div className="timeline">
              {timelineData.map((item, index) => (
                <motion.div key={index} className="timeline-item" initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.6}} viewport={{once: true}}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h5>{item.year}</h5>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>

        <motion.div className="mb-5" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}>
          <motion.h4 className="mb-4 section-subheading text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            Skills
          </motion.h4>
          <Row className="justify-content-center">
            {skills.map((skill, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h6>{skill.name}</h6>
                  <ProgressBar now={skill.level} label={`${skill.level}%`} variant="info" animated striped />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div className="text-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}>
          <motion.h4 className="mb-4 section-subheading text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            Core Values
          </motion.h4>
          <Row className="justify-content-center">
            {values.map((val, i) => (
              <Col xs={6} md={3} key={i} className="mb-4">
                <motion.div
                  className="value-card p-4 h-100 neon-border text-light rounded-4"
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 0 20px #0ff, 0 0 40px #0ff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="value-icon styled-box mx-auto mb-2">
                    {val.icon}
                  </div>
                  <p className="fw-semibold text-light mt-2">{val.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div className="row mb-5" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}>
          <motion.h4 className="mb-4 section-subheading text-center w-100" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            Highlights
          </motion.h4>
          {highlights.map((item, i) => (
            <Col xs={6} md={3} key={i} className="mb-4">
              <motion.div
                className="highlight-card text-center h-100 p-3"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px #0ff, 0 0 40px #0ff',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="value-icon mb-2">{item.icon}</div>
                <Card.Body>
                  <Card.Title className="fs-3 fw-bold text-info">{item.title}</Card.Title>
                  <Card.Text className="text-light">{item.subtitle}</Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default About;
