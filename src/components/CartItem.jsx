import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementItem, decrementItem } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './CartItem.css';

function CartItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  // Calculate total number of items
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total cost
  const totalCost = cartItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);

  const handleIncrement = (itemName) => {
    dispatch(incrementItem(itemName));
  };

  const handleDecrement = (itemName) => {
    dispatch(decrementItem(itemName));
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    setShowCheckoutMessage(true);
    setTimeout(() => {
      setShowCheckoutMessage(false);
    }, 3000);
  };

  return (
    <div className="cart-container">
      <Header />
      <div className="cart-content">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <div className="summary-item">
                <span className="summary-label">Total Items:</span>
                <span className="summary-value">{totalQuantity}</span>
              </div>
              <div className="summary-item total-cost">
                <span className="summary-label">Total Cost:</span>
                <span className="summary-value">${totalCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.cost}</p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleDecrement(item.name)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleIncrement(item.name)}
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="item-total">
                      <span className="subtotal-label">Subtotal:</span>
                      <span className="subtotal-value">${(item.cost * item.quantity).toFixed(2)}</span>
                    </div>

                    <button 
                      className="delete-btn"
                      onClick={() => handleRemove(item.name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>

            {showCheckoutMessage && (
              <div className="checkout-message">
                <p>Coming Soon! Checkout functionality will be available shortly.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
