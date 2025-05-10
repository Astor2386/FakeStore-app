// src/components/ProductCard.jsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="mt-auto">
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;