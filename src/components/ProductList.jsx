import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Header from './Header';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Produces oxygen at night, improving air quality.",
          cost: 15
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Filters formaldehyde and xylene from the air.",
          cost: 12
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Removes mold spores and purifies the air.",
          cost: 18
        },
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Thrives in low light and requires minimal watering.",
          cost: 20
        },
        {
          name: "Pothos",
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Easy to grow and can tolerate neglect.",
          cost: 10
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1608798836200-0a6f5f5e5f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Hardy plant that grows well in indirect light.",
          cost: 16
        },
      ]
    },
    {
      category: "Flowering Plants",
      plants: [
        {
          name: "Orchid",
          image: "https://images.unsplash.com/photo-1573489864394-4e4f7e5a6c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Elegant flowers that bloom for months.",
          cost: 25
        },
        {
          name: "Anthurium",
          image: "https://images.unsplash.com/photo-1586878261054-4b61d4dbad3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Bright red flowers that symbolize hospitality.",
          cost: 22
        },
        {
          name: "African Violet",
          image: "https://images.unsplash.com/photo-1615485500834-bc10199bc685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Compact plant with beautiful purple flowers.",
          cost: 14
        },
      ]
    },
    {
      category: "Succulents",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1596490260584-f65862a291f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Medicinal plant with soothing gel.",
          cost: 13
        },
        {
          name: "Jade Plant",
          image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          description: "Symbol of good luck and prosperity.",
          cost: 17
        },
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  const isInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName) || addedToCart[plantName];
  };

  return (
    <div className="product-list-container">
      <Header />
      <div className="product-list-content">
        <h1 className="page-title">Our Premium Houseplants</h1>
        <p className="page-subtitle">Transform your space with our carefully curated collection</p>
        
        {plantsArray.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="products-grid">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="product-card">
                  <div className="product-image-container">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${plant.cost}</span>
                      <button
                        className={`add-to-cart-btn ${isInCart(plant.name) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.name)}
                      >
                        {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
