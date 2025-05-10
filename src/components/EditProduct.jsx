// src/components/EditProduct.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const { title, price, description, category } = response.data;
        setFormData({ title, price, description, category });
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch product: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
// Placeholder.com due to FakeStoreAPI requires an image field in request body for POST and PUT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        await axios.put(`https://fakestoreapi.com/products/${id}`, {
          ...formData,
          price: parseFloat(formData.price),
          image: 'https://via.placeholder.com/150',
        });
        setSubmitted(true);
        setError(null);
        setTimeout(() => navigate('/products'), 2000);
      } catch (err) {
        setError(`Error updating product: ${err.message}`);
        setSubmitted(false);
      }
    }
    setValidated(true);
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <Spinner animation="border" variant="primary" /> Loading product...
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Edit Product</h2>
      {submitted && (
        <Alert variant="success" dismissible>
          Product updated successfully! Redirecting...
        </Alert>
      )}
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter product title"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
            required
            min="0"
            step="0.01"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a description.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter product category"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a category.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;