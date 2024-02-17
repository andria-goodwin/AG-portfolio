import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Row, Col } from 'react-bootstrap'

const styles = {
  about: {
    textAlign: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  text: {
    marginTop: "5%",
  }
};

function About() {
  return (
    <div style={styles.about}>
      <Row>
        <Col md>
          <Image src='src/assets/AG-photo.jpg' style={styles.img} roundedCircle />
        </Col>
        <Col md style={styles.text}>
          <h2>My name is Andria Goodwin</h2>
          <p>I am a coding bootcamp student through KU and edX. I know that although I have learned a lot during my time in coding bootcamp, there will always be more to learn and ways to become more efficient. My goal is to always be open to learning and growing.</p>
        </Col>
      </Row>  
    </div>
  )
}

export default About