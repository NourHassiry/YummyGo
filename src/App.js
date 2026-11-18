import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  const addToFavorites = (item) => {
    if (!favorites.find(f => f.name === item.name)) {
      setFavorites([...favorites, item]);
    }
  };
  const removeFromFavorites = (item) => setFavorites(favorites.filter(f => f.name !== item.name));
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} addToFavorites={addToFavorites} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        <Route path="/order" element={<Order cart={cart} totalPrice={totalPrice} clearCart={clearCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;