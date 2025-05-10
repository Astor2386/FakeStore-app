// src/components/AddProduct.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        await axios.post('https://fakestoreapi.com/products', {
          ...formData,
          price: parseFloat(formData.price),
          image: 'https://via.placeholder.com/150',
        });
        setSubmitted(true);
        setError(null);
        setTimeout(() => navigate('/products'), 2000);
      } catch (err) {
        setError(`Error adding product: ${err.message}`);
        setSubmitted(false);
      }
    }
    setValidated(true);
  };

  return (
    <Container className="mt-5">
      <h2>Add New Product</h2>
      {submitted && (
        <Alert variant="success" dismissible>
          Product added successfully! Redirecting...
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
          Add Product
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;