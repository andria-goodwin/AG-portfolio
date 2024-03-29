import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const styles ={
  card: {
    marginBottom: "2%",
    textAlign: "center",
  },
  title: {
    marginTop: "1%",
  },
  img: {
    width: '100%',
  },
  github: {
    width: "50px",
    height: "50px",
  },
  website: {
    width: "55px",
    height: "55px",
    marginLeft: "10px",
  },
};

// Individual Cards 
function Project(props) {
    return (
      <Card style={styles.card}> 
        <div className="img-container">
          <a href={props.deploy} target="blank">
            <img alt={props.name} src={props.image} style={styles.img}/>
          </a>
        </div>
        <div className="content">
              <h3 style={styles.title}>{props.name}</h3>
              <p className="proj-icons-container">
              <a href={props.github} title="GitHub Repo Link" target="blank">
                <img src="/assets/Github.png" alt="GitHub Repo" style={styles.github}></img>
              </a> 
              <a href={props.deploy} title="Website Link" target="blank">
                <img src="/assets/Website-icon.png" alt="Live Application" style={styles.website}/>
              </a> 
              </p>
        </div>
      </Card>
    );
}
  
  export default Project;