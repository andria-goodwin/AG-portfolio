const styles = {
  linkedin: {
    height: "50px",
    width: "50px",
    marginLeft: '10px',
    marginBottom: "10px",
    marginTop: "10px",
  },
  github: {
    height: "50px",
    width: "50px",
    marginLeft: "25px",
    marginBottom: "10px",
    marginTop: "10px",
  }
};

function Footer() {
  return (
    <div style={styles.container}>
      <a href="https://github.com/andria-goodwin" title="Andria's Github" target="blank">
        <img src="/assets/light-github.png" alt="GitHub Link" style={styles.github}></img>
      </a>
      <a href="https://www.linkedin.com/in/andria-goodwin/" title="Andria's LinkedIn" target="blank">
        <img src="/assets/linkedin-icon.png" alt="LinkedIn Link" style={styles.linkedin}></img>
      </a>
    </div>
  )
}

export default Footer