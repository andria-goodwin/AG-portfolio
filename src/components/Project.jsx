import 'bootstrap/dist/css/bootstrap.min.css';

const styles ={
  img: {
    width: '100%',
  },
};

// Individual Cards 
function Project(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image} style={styles.img}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p className="proj-icons-container">
              <a href={props.github}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a> 
              </p>
        </div>
      </div>
    );
}
  
  export default Project;