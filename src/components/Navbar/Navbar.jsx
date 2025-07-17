import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'; // Custom styles for neon effect

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const PortfolioNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand
          onClick={() => scroll.scrollToTop()}
          style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />
        <Navbar.Collapse id="portfolio-navbar-nav">
          <div className="ms-auto d-flex align-items-center gap-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active-nav-link"
                className="custom-nav-link"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
