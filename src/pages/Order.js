import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Order.css';

const TOTAL_SECONDS = 2700; 

function Order({ cart, totalPrice, clearCart }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    if (!confirmed) return;
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [confirmed]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{7,15}$/.test(phone.trim())) {
      newErrors.phone = 'Enter a valid phone number (7 to 15 digits).';
    }
    if (!location.trim()) newErrors.location = 'Please enter your address.';
    return newErrors;
  };

  const handleConfirm = () => {
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setConfirmed(true);
    clearCart();
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const progress = (seconds / TOTAL_SECONDS) * 100;

  if (confirmed) {
    return (
      <div className="order-container">
        <div className="order-success-card">
          <div className="success-emoji">
            {seconds === 0 ? '🍔' : '🎉'}
          </div>

          <h2 className="order-title">
            {seconds === 0 ? 'Your Order Arrived!' : 'Order Confirmed!'}
          </h2>

          <p className="success-msg">
            {seconds === 0
              ? `Enjoy your meal, ${name}! ❤️`
              : `Thank you ${name}! Your order is on the way 🛵`}
          </p>

          {seconds > 0 && (
            <>
              <p className="eta-label">Arriving in</p>
              <div className="countdown">{formatTime(seconds)}</div>

              <div className="progress-wrap">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <p className="eta-note">We'll be at your door soon 🍳</p>
            </>
          )}
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="order-container">
        <div className="order-form-card text-center">
          <h2 className="order-title">Your cart is empty 🛒</h2>
          <p className="order-subtitle">
            Add something delicious from the menu to place an order.
          </p>
          <Link to="/menu" className="order-btn text-decoration-none">
            Browse the Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-container">
      <div className="order-form-card">
        <h2 className="order-title">Confirm Your Order 📝</h2>
        <p className="order-subtitle">
          Just a few details and your food is on its way
        </p>

        <div className="order-field">
          <label htmlFor="order-name">Your Name</label>
          <input
            id="order-name"
            className="order-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <p className="order-error">{errors.name}</p>}
        </div>

        <div className="order-field">
          <label htmlFor="order-phone">Phone Number</label>
          <input
            id="order-phone"
            className="order-input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
          />
          {errors.phone && <p className="order-error">{errors.phone}</p>}
        </div>

        <div className="order-field">
          <label htmlFor="order-location">Delivery Location</label>
          <input
            id="order-location"
            className="order-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your address"
          />
          {errors.location && <p className="order-error">{errors.location}</p>}
        </div>

        <div className="order-footer">
          <div className="order-total">
            <span className="total-label">{cart.length} items</span>
            <span className="total-amount">${totalPrice}</span>
          </div>
          <button className="order-btn" onClick={handleConfirm}>
            Confirm Order ✅
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;