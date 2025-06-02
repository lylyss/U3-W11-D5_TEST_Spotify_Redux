import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import MusicPlayer from "./MusicPlayer";

const Home = () => {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 11, offset: 1 }} className="mainBg text-white d-flex flex-column p-0">
          <MainContent />

          {/* Music Player */}
          <div className="bg-dark text-white position-sticky m-0" style={{ bottom: 0 }}>
            <MusicPlayer />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
