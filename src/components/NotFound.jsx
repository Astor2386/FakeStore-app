// src/components/NotFound.jsx
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Decrease countdown every second
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect to home after 10 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 10000);

    // Cleanup interval and timeout on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <Container className="mt-5">
      <h2>404 Not Found</h2>
      <p>Sorry, that page does not exist 😭</p>
      <p>
        <strong>You will be redirected to the home page in...</strong>
      </p>
      <Badge bg="primary" className="mb-3 fs-2">
        {countdown}
      </Badge>
      <p>
        Or you can always <Link to="/">go home!</Link>
      </p>
    </Container>
  );
}

export default NotFound;