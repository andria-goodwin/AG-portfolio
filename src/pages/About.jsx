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
    marginTop: "5%",
    marginBottom: "5%",
  },
  img: {
    width: 250,
    height: 250,
  },
  text: {
    marginTop: "5%",
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
              src="src/assets/AG-photo.jpg"
              style={styles.img}
              roundedCircle
            />
          </Col>
          <Col md style={styles.text}>
            <h2>My name is Andria Goodwin</h2>
            <p>
              I am a coding bootcamp student through KU and edX. I know that,
              although I have learned a lot during my time in coding bootcamp,
              there will always be more to learn and ways to become more
              efficient. My goal is to always be open to learning and growing.
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default About;
