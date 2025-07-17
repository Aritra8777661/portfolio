import React from 'react';
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    { icon: FaFacebookF, link: 'https://facebook.com', tooltip: 'Facebook' },
    { icon: FaTwitter, link: 'https://twitter.com', tooltip: 'Twitter' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com', tooltip: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="contact-section py-5 bg-dark text-light">
      <Container>
        <motion.h2
          className="section-heading text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        {/* Full Width Map */}
        <motion.div
          className="mb-5 map-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.542160809857!2d88.36389501496061!3d22.57264678517842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b5bd3de305%3A0x7ea5e0f446d3e17b!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1667746314913!5m2!1sen!2sin"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Info and Form - Mobile first: Form then Info */}
        <Row className="flex-column-reverse flex-md-row">
          <Col md={6} className="order-2 order-md-1 mb-4">
            <Row className="gy-4">
              {[{
                icon: <FaPhoneAlt className="fs-1 text-info" />,
                text: "+91 9876543210"
              }, {
                icon: <FaEnvelope className="fs-1 text-info" />,
                text: <a href="mailto:aritra@example.com" className="text-info">aritra@example.com</a>
              }].map((item, i) => (
                <Col md={6} key={i} className="text-center">
                  <motion.div
                    className="p-4 contact-info-item neon-border rounded h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <div className="icon-wrapper mb-2">
                      {item.icon}
                    </div>
                    <p className="mb-0 fs-5">{item.text}</p>
                  </motion.div>
                </Col>
              ))}
              <Col md={12} className="text-center">
                <motion.div
                  className="p-4 contact-info-item neon-border rounded h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="icon-wrapper mb-2">
                    <FaMapMarkerAlt className="fs-1 text-info" />
                  </div>
                  <p className="mb-0 fs-5">Kolkata, West Bengal, India</p>
                </motion.div>
              </Col>

              {/* Social Media */}
              <Col xs={12} className="mt-4">
                <motion.div
                  className="d-flex justify-content-start gap-3 py-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {socialLinks.map(({ icon: Icon, link, tooltip }, index) => (
                    <OverlayTrigger
                      key={index}
                      placement="top"
                      overlay={<Tooltip id={`tooltip-${index}`}>{tooltip}</Tooltip>}
                    >
                      <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon neon-border rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '45px', height: '45px' }}
                        whileHover={{ scale: 1.3, rotate: 10 }}
                      >
                        <Icon className="text-info" />
                      </motion.a>
                    </OverlayTrigger>
                  ))}
                </motion.div>
              </Col>
            </Row>
          </Col>

          <Col md={6} className="order-1 order-md-2">
            <motion.div
              className="contact-form neon-border p-4 rounded w-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="text-center text-info mb-4">Send a Message</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    required
                    className="contact-input"
                    as={motion.input}
                    whileFocus={{ scale: 1.02, borderColor: '#00ffff' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                    className="contact-input"
                    as={motion.input}
                    whileFocus={{ scale: 1.02, borderColor: '#00ffff' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as={motion.textarea}
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="contact-input"
                    whileFocus={{ scale: 1.02, borderColor: '#00ffff' }}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="outline-info" type="submit" className="neon-button">
                    Send Message
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
