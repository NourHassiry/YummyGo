import React, { useState } from 'react';
import RestaurantMenu from '../components/RestaurantsMenu';
import '../styles/Menu.css';

const sections = [
  {
    title: '🍔 Fast Food',
    image: '/images/fast-food.png',
    restaurants: [
      { name: 'Mr. Burger', image: '/images/mr.burger.png' },
      { name: 'Big Bites', image: '/images/big bites.png' },
      { name: 'Pizza Hot', image: '/images/pizza hot.png' },
    ]
  },
  {
    title: '🥤 Drinks',
    image: '/images/juices.png',
    restaurants: [
      { name: 'Shake Crazy', image: '/images/shake crazy.jpeg' },
      { name: 'Mix Juice', image: '/images/mix juice.jpeg' },
    ]
  },
  {
    title: '🍰 Sweets',
    image: '/images/Desserts.jpg',
    restaurants: [
      { name: 'Daoud Brothers', image: '/images/Daoud brothers.jpeg' },
      { name: 'Yummy Scoop', image: '/images/yummy scoop.jpeg' },
      { name: 'The Baked Bite', image: '/images/the baked bite.jpeg' },
    ]
  }
];

function Menu({ addToCart, addToFavorites }) {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  if (selectedRestaurant) {
    return (
      <RestaurantMenu
        restaurant={selectedRestaurant}
        onBack={() => setSelectedRestaurant(null)}
        addToCart={addToCart}
        addToFavorites={addToFavorites}
      />
    );
  }

  return (
    <div className="menu-container">
      <h1 className="menu-title text-center mb-2">Our Menu 🍽️</h1>
      <p className="menu-subtitle text-center mb-5">
        {!selectedSection
          ? 'Choose a category to explore our restaurants'
          : `Pick a restaurant from ${selectedSection.title}`}
      </p>

      {!selectedSection ? (
        <div className="row g-4 justify-content-center">
          {sections.map((section) => (
            <div key={section.title} className="col-lg-4 col-md-6">
              <div className="card menu-card h-100">
                <img
                  src={section.image}
                  className="card-img-top menu-card-img"
                  alt={section.title}
                />
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <h4 className="menu-title mb-1">{section.title}</h4>
                  <small className="menu-count mb-3">
                    {section.restaurants.length} Restaurants
                  </small>
                  <button
                    className="menu-btn"
                    onClick={() => setSelectedSection(section)}
                  >
                    View Restaurants
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <button
              className="back-btn"
              onClick={() => setSelectedSection(null)}
            >
              ← Back
            </button>
            <h2 className="menu-title mb-0">{selectedSection.title}</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {selectedSection.restaurants.map((restaurant) => (
              <div key={restaurant.name} className="col-lg-4 col-md-6">
                <div className="card menu-card h-100">
                  <img
                    src={restaurant.image}
                    className="card-img-top menu-card-img"
                    alt={restaurant.name}
                  />
                  <div className="card-body text-center d-flex flex-column justify-content-between">
                    <h5 className="menu-title mb-3">{restaurant.name}</h5>
                    <button
                      className="menu-btn"
                      onClick={() => setSelectedRestaurant(restaurant.name)}
                    >
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;