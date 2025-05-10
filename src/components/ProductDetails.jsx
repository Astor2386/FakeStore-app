// src/components/ProductDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import DeleteModal from './DeleteModal';

function ProductDetails() {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch product on component mount
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch product: ${error.message}`);
        setLoading(false);
      });
  }, [id]); // Refetch if ID changes

  // Handle product deletion
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setShowModal(false);
        navigate('/products'); // Redirect to product list
      })
      .catch((error) => {
        setError(`Failed to delete product: ${error.message}`);
        setLoading(false);
        setShowModal(false);
      });
  };

  // Show loading spinner while fetching
  if (loading) {
    return (
      <Container className="mt-5">
        <Spinner animation="border" variant="primary" /> Loading product...
      </Container>
    );
  }

  // Show error message if fetch fails
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  // Show product details
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{ height: '300px', objectFit: 'contain', padding: '20px' }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {product.description}
              </Card.Text>
              <Card.Text>
                <strong>Category:</strong> {product.category}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/edit-product/${id}`)}
                className="me-2"
              >
                Edit Product
              </Button>
              <Button
                variant="danger"
                onClick={() => setShowModal(true)}
              >
                Delete Product
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Delete confirmation modal */}
      <DeleteModal
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default ProductDetails;