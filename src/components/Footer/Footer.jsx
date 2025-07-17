import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-neon text-center text-muted py-3">
      <Container>
        <small>&copy; {new Date().getFullYear()} Aritra Ghosh. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
