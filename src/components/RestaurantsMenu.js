import React from 'react';
import '../styles/RestaurantMenu.css';

const menus = {
  'Mr. Burger': [
    { name: 'Lebanese Burger', price: 4, image: '/images/lebanese.jpeg' },
    { name: 'American Burger', price: 5, image: '/images/american .jpeg' },
    { name: 'Swiss Mushroom Burger', price: 8, image: '/images/swiss mushroom.jpeg' },
    { name: 'Crispy Burger', price: 6, image: '/images/crispy chicken .jpeg' },
    { name: 'BBQ Burger', price: 7, image: '/images/BBQ.jpeg' },
    { name: 'Mozarella Burger', price: 8, image: '/images/mozarella.jpeg' },
    { name: 'Double Cheese Burger', price: 10, image: '/images/double lebanese.jpeg' },
    { name: 'Chicken Burger', price: 4, image: '/images/chiccken burger.jpeg' },
  ],
  'Big Bites': [
    { name: 'Chicken Shawarma', price: 3, image: '/images/chicken shawarma.jpeg' },
    { name: 'Crispy Sandwich', price: 5, image: '/images/Crispy.jpeg' },
    { name: 'Escalope Sandwich', price: 5, image: '/images/escalope.jpeg' },
    { name: 'Fajita Sandwich', price: 6, image: '/images/fajita.jpeg' },
    { name: 'Falafel Sandwich', price: 2, image: '/images/falafel.jpeg' },
    { name: 'Fish Fillet', price: 5, image: '/images/fish fillet.jpeg' },
    { name: 'Francisco Sandwich', price: 7, image: '/images/francisco.jpeg' },
    { name: 'Meat Shawarma Sandwich', price: 4, image: '/images/shawarma lahme.jpeg' },
  ],
  'Pizza Hot': [
    { name: 'Vegetables Pizza (Medium)', price: 6, image: '/images/vegtables.jpeg' },
    { name: 'Peperoni Pizza (Medium)', price: 6, image: '/images/peporoni.jpeg' },
    { name: 'Margarita Pizza (Medium)', price: 6, image: '/images/margarita.jpeg' },
    { name: 'Chicken Pizza (Medium)', price: 6, image: '/images/chicken pizza.jpeg' },
    { name: 'Sojok Pizza (Medium)', price: 8, image: '/images/sojok .jpeg' },
    { name: 'Salami Pizza (Medium)', price: 8, image: '/images/salami pizza.jpeg' },
  ],
  'Shake Crazy': [
    { name: 'Chocolate Milkshake', price: 4, image: '/images/chocolate milkshake.jpeg' },
    { name: 'Strawberry Milkshake', price: 4, image: '/images/strawberry milkshake.jpeg' },
    { name: 'Oreo Milkshake', price: 4, image: '/images/oreo milkshake.jpeg' },
    { name: 'Lotus Milkshake', price: 4, image: '/images/lotus milkshake.jpeg' },
    { name: 'Vanilla Milkshake', price: 4, image: '/images/vanilla milkshake.jpeg' },
  ],
  'Mix Juice': [
    { name: 'Orange Juice', price: 2, image: '/images/orange.jpeg' },
    { name: 'Strawberry Juice', price: 3, image: '/images/straw juice.jpeg' },
    { name: 'PineApple Juice', price: 5, image: '/images/pine apple .jpeg' },
    { name: 'Mango Juice', price: 5, image: '/images/mango.jpeg' },
    { name: 'Kiwi Juice', price: 7, image: '/images/kiwi.jpeg' },
    { name: 'Carrot Juice', price: 3, image: '/images/carrot.jpeg' },
    { name: 'Mohito', price: 7, image: '/images/mohito.jpeg' },
    { name: 'Iced Coffee', price: 3, image: '/images/iced coffe.jpeg' },
    { name: 'Iced Tea', price: 3, image: '/images/iced tea.jpeg' },
    { name: 'Pepsi', price: 1, image: '/images/pepsi.jpeg' },
    { name: '7up', price: 1, image: '/images/7up.jpeg' },
    { name: 'Miranda', price: 1, image: '/images/Miranda.jpeg' },
    { name: 'Sparkling Water', price: 1, image: '/images/Sparkling water.jpeg' },
  ],
  'Daoud Brothers': [
    { name: 'Baklawa (medium plate)', price: 7, image: '/images/baklawa.jpeg' },
    { name: 'Halawet Jibn (medium plate)', price: 6, image: '/images/halawet jibn .jpeg' },
    { name: 'Knafa b Ashta (1 piece)', price: 2, image: '/images/knafaashta.jpeg' },
    { name: 'Knafa b Jobn', price: 4, image: '/images/knafa.jpeg' },
    { name: 'Katayef b Ashta (1 piece)', price: 2, image: '/images/katayef.jpeg' },
    { name: 'Namoura (medium plate)', price: 5, image: '/images/namoura.jpeg' },
  ],
  'Yummy Scoop': [
    { name: 'Chocolate IceCream (3 balls)', price: 2, image: '/images/choc icecream.jpeg' },
    { name: 'Vanilla IceCream (3 balls)', price: 2, image: '/images/vanilla ice.jpeg' },
    { name: 'Strawberry IceCream (3 balls)', price: 2, image: '/images/stra cream.jpeg' },
    { name: 'Lemon IceCream (3 balls)', price: 3, image: '/images/lemon icecream.jpeg' },
    { name: 'Oreo IceCream (3 balls)', price: 5, image: '/images/oreo cream.jpeg' },
    { name: 'Mint IceCream (3 balls)', price: 5, image: '/images/mint cream.jpeg' },
    { name: 'BlueBerry IceCream (3 balls)', price: 6, image: '/images/blueberry crean.jpeg' },
    { name: 'Almond IceCream (3 balls)', price: 5, image: '/images/almond.jpeg' },
  ],
  'The Baked Bite': [
    { name: 'Chocolate Cake', price: 2, image: '/images/choc cake.jpeg' },
    { name: 'Strawberry Cake', price: 2, image: '/images/straw cake.jpeg' },
    { name: 'Vanilla Cake', price: 2, image: '/images/vanilla cake.jpeg' },
    { name: 'Lotus CheeseCake', price: 4, image: '/images/lotus cheesecake.jpeg' },
    { name: 'Strawberry CheeseCake', price: 4, image: '/images/straw cheesecake.jpeg' },
    { name: 'Blueberry CheeseCake', price: 5, image: '/images/bluebeery cheesecake.jpeg' },
  ],
};

function RestaurantMenu({ restaurant, onBack, addToCart, addToFavorites }) {
  const items = menus[restaurant] || [];

  return (
    <div className="container mt-4">
      <button className="back-btn mb-3" onClick={onBack}>← Back</button>
      <h2>{restaurant} Menu</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.name} className="col-md-4 mb-3">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} height="200" />
              <div className="card-body text-center">
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                <button className="add-cart-btn me-2" onClick={() => addToCart(item)}>
                  Add to Cart 🛒
                </button>
                <button className="btn btn-outline-danger" onClick={() => addToFavorites(item)}>
                  ❤️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;