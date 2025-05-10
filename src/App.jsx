// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      {/* NavBar is outside Routes so it appears on every page per instructors video lesson (Jeremy A.) */}
      <NavBar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        {/* Product listing page route */}
        <Route path="/products" element={<ProductList />} />
        {/* Product details page route with dynamic ID parameter */}
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Add product page route */}
        <Route path="/add-product" element={<AddProduct />} />
        {/* Edit product page route with dynamic ID parameter */}
        <Route path="/edit-product/:id" element={<EditProduct />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;