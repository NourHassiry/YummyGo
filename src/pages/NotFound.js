import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="menu-title">404 😕</h1>
      <p className="menu-subtitle mb-4">
        We couldn't find the page you were looking for.
      </p>
      <Link to="/" className="menu-btn text-decoration-none">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;