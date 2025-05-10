// src/components/HomePage.jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
// Going to use a raw building emoji instead of the unicode for cleaner look 😆
  return (
    <Container className="mt-5">
      <Row>
        <Col> 
          <h2>Welcome to FakeStore! 🏬</h2> 
          <p>
            Browse our collection of fake products, add new ones, or edit existing ones.
            This app uses the FakeStoreAPI to simulate a real e-commerce experience.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate('/products')}
          >
            View Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;