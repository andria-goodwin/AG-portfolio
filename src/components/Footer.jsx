const styles = {
  linkedin: {
    height: "50px",
    width: "50px",
    marginLeft: '10px'
  },
  github: {
    height: "63px",
    width: "63px",
  }
};

function Footer() {
  return (
    <div style={styles.container}>
      <a href="https://github.com/andria-goodwin" target="blank">
        <img src="src/assets/GitHub-Logo.png" alt="GitHub Link" style={styles.github}></img>
      </a>
      <a href="https://www.linkedin.com/in/andria-goodwin-089305112/" target="blank">
        <img src="src/assets/linkedin-icon.png" alt="LinkedIn Link" style={styles.linkedin}></img>
      </a>
    </div>
  )
}

export default Footer