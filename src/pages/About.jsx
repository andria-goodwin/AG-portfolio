import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image, Row, Col } from "react-bootstrap";

const styles = {
  card: {
    padding: "2%",
    background: "#D6FEFF",
    fontFamily: "monospace",
  },
  about: {
    textAlign: "center",
    marginTop: "3%",
    marginBottom: "5%",
  },
  img: {
    marginTop: "5%",
    width: 250,
    height: 250,
  },
  text: {
    
  },
};

function About() {
  return (
    <div>
      <Card style={styles.card}>
        <h2 className="top-title">About Me</h2>
        <hr></hr>
        <Row style={styles.about}>
          <Col md>
            <Image
              src="/assets/AG-photo.jpg"
              style={styles.img}
              roundedCircle
            />
          </Col>
          <Col md style={styles.text}>
            <h2>My name is Andria Goodwin</h2>
            <p>
              I am Junior Full-Stack Web Developer. I completed a coding bootcamp 
              through the University of Kansas in March of 2024. I know that,
              although I have learned a lot during my time in coding bootcamp,
              there will always be more to learn and ways to become more
              efficient. My goal is to always be open to learning and growing.
            </p>
            <br/>
            <p>
              Before coding, I worked in the medical field as a CNA and/or CMA 
              for over 8 years. I primarily supported people with intellectual 
              and/or developmental disabilities but have spent time supporting 
              the elderly. I intend to apply the patience, adaptability, and reliability 
              that was essential in the medical field to a new career path in web development.
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default About;
