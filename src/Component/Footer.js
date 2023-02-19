import { Container, Row, Col } from "react-bootstrap";
// import MailchimpForm from "./Contact US/MailchimpForm";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
import Newsletter from "./Newsletter";
import './Footer.css'
 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
           <h2>LOGO</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><Facebook /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Linkedin /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;