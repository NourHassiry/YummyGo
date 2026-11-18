import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cart, removeFromCart, totalPrice }) {
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/menu" className="cart-btn">Order Now →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-page-title">Your Cart 🛒</h2>

      <div className="row g-4">
        <div className="col-lg-8">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <h5>{item.name}</h5>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(index)}
                title="Remove"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="cart-summary">
            <h4>Order Summary</h4>
            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="free">Free</span>
            </div>
            <hr />
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <Link
              to="/order"
              className="cart-btn w-100 text-center mt-3"
            >
              Confirm Order ✅
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;