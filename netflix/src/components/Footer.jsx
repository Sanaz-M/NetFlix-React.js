import { Col, Container, Row, Button } from "react-bootstrap";
import {FaFacebookSquare,BsInstagram, FiTwitter,IoLogoYoutube,} from "react-icons/all";


const Footer = () => (
  <Container id="footer">
    <Row id="footer-first-row">
      <FaFacebookSquare className="icons" />
      <BsInstagram className="icons" />
      <FiTwitter className="icons" />
      <IoLogoYoutube className="icons" />
    </Row>

    <Row id="footer-second-row">
      <Col md={2} className="footer-cols">
        <a href="#">Audio and Subtitles</a>
        <a href="#">Media Center</a>
        <a href="#">Privacy</a>
        <a href="#">Contact Us</a>

        <Button id="button-servic" variant="outline-light">
          Service Code
        </Button>
        <p id="last-line"> &copy; 1997-2019 Netflix, INC.</p>
      </Col>
      <Col md={2} className="footer-cols">
        <a href="#">Audio Description</a>
        <a href="#">Investor Relations</a>
        <a href="#">Legal Notices</a>
      </Col>
      <Col md={2} className="footer-cols">
        <a href="#">Help Center</a>
        <a href="#">Jobs</a>
        <a href="#">Cookie Preferences</a>
      </Col>
      <Col md={2} className="footer-cols">
        <a href="#">Gift Cards</a>
        <a href="#">Terms of Use</a>
        <a href="#">Corporate Information</a>
      </Col>
    </Row>
  </Container>
);

export default Footer;