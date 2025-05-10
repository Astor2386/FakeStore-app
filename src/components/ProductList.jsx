// src/components/ProductList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products on component mount
  {/*useEffect only runs once on the initial component render, at least if you have an empty dependency array. 
    If we add other variables into the dependency array, then we list them as dependencies. If the value of any dependency
    changes, then useEffect() runs again*/}
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch products: ${error.message}`);
        setLoading(false);
      });
  }, []); // Empty dependency array to run once on mount

  // Show loading spinner while fetching
  if (loading) {
    return (
      <Container className="mt-5">
        <Spinner animation="border" variant="primary" /> Loading products...
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

  return (
    <Container className="mt-5">
      <h2>Product List</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;