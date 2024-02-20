import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

const styles = {
  resume: {
    textAlign: 'center',
  },
  
  img: {
    width: '85%',
  },
  text: {
    marginTop: "5%",
  },
  list: {
    listStyleType: 'none',
  }
};

function Resume() {
  return (
    <section>
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div style={styles.resume}>
      <Row>
        <Col md>
          <a href='https://drive.google.com/file/d/103yFWmNY7MWUe6_aVXo-FkedoJ0vcxgF/view?usp=sharing'>
            <img src='src/assets/AG-Resume.png' style={styles.img} />
            <p>Download</p>
          </a>
          
        </Col>
        <Col md style={styles.text}>
          <h2>Bootcamp Skills</h2>
          <ul style={styles.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Web APIs</li>
            <li>Third-Party APIs</li>
            <li>Server-side APIs</li>
            <li>Node.js</li>
            <li>Object-Oriented Programming</li>
            <li>Express.js</li>
            <li>SQL – MySQL</li>
            <li>Object-Relational Mapping</li>
            <li>Model-View-Controller</li>
            <li>No SQL – MongoDB</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>MERN</li>
          </ul>
        </Col>
      </Row>  
    </div>
    </section>
  )
}

export default Resume