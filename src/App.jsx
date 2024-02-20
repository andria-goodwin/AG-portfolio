import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const styles = {
  headerContainer: {
    position: "fixed",
    width: "100%",
    top: "0",
    zIndex: "1",
  },
  container: {
    marginTop: "200px",
    marginBottom: "100px",
    zIndex: "0"
  },
  footerContainer: {
    position: "fixed",
    width: "100%",
    bottom: "0",
    left: "0",
    background: "#27024D",
    zIndex: "1",
  },
};

function App() {
  return (
    <div>
      <div style={styles.headerContainer}>
        <Header />
      </div>
      <Container style={styles.container}>
        <Outlet />
      </Container>
      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
