import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Favorites.css';

function Favorites({ favorites, removeFromFavorites }) {
  if (favorites.length === 0) {
    return (
      <div className="fav-container">
        <div className="fav-empty">
          <div className="fav-empty-heart">❤️</div>
          <h2 className="fav-empty-title">No Favorites Yet</h2>
          <p className="fav-empty-text">
            Start adding meals you love and they'll show up here.
          </p>
          <Link to="/menu" className="fav-btn">Browse Menu →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fav-container">
      <header className="fav-header">
        <h2 className="fav-title">Your Favorites ❤️</h2>
        <p className="fav-subtitle">
          You have <strong>{favorites.length}</strong>{' '}
          {favorites.length === 1 ? 'item' : 'items'} you love
        </p>
      </header>

      <div className="fav-wall">
        {favorites.map((item, index) => (
          <div
            key={index}
            className="fav-polaroid"
            style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 2}deg)` }}
          >
            <span className="fav-heart-badge">❤️</span>

            <div className="fav-photo">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="fav-caption">
              <h5>{item.name}</h5>
              <span className="fav-price">${item.price}</span>
            </div>

            <button
              className="fav-remove"
              onClick={() => removeFromFavorites(item)}
              title="Remove from favorites"
            >
              💔
            </button>
          </div>
        ))}
      </div>

      <div className="fav-footer">
        <Link to="/menu" className="fav-btn">Add More Dishes →</Link>
      </div>
    </div>
  );
}

export default Favorites;