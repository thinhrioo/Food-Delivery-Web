import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate cart totals
  const cartFood = food_list.filter(item => cartItems[item.id] > 0);
  const subtotal = getTotalCartAmount ? getTotalCartAmount() : 
    cartFood.reduce((sum, item) => sum + item.price * (cartItems[item.id] || 0), 0);
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  // Format price function
  const formatPrice = (num) => {
    const fixed = Number(num || 0).toFixed(2);
    return fixed.endsWith(".00") ? fixed.slice(0, -3) : fixed;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the order
    console.log('Order submitted:', { formData, cartItems, total });
    // Navigate to payment or confirmation page
    // navigate('/payment');
  };

  return (
    <div className="place-order-page">
      <h2 className="page-title">Place Order</h2>
      
      <form className="place-order" onSubmit={handleSubmit}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          
          <div className="multi-fields">
            <input 
              type="text" 
              placeholder="First Name" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
          </div>
          
          <input 
            type="email" 
            placeholder="Email address" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
          
          <input 
            type="text" 
            placeholder="Street" 
            name="street"
            value={formData.street}
            onChange={handleChange}
            required 
          />
          
          <div className="multi-fields">
            <input 
              type="text" 
              placeholder="City" 
              name="city"
              value={formData.city}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              placeholder="State" 
              name="state"
              value={formData.state}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="multi-fields">
            <input 
              type="text" 
              placeholder="Zip code" 
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              placeholder="Country" 
              name="country"
              value={formData.country}
              onChange={handleChange}
              required 
            />
          </div>
          
          <input 
            type="tel" 
            placeholder="Phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="place-order-right">
          <div className="cart-totals">
            <h3>Cart Totals</h3>
            
            <div className="totals-row">
              <span>Subtotal</span>
              <span>${formatPrice(subtotal)}</span>
            </div>
            
            <div className="totals-row">
              <span>Delivery Fee</span>
              <span>${formatPrice(deliveryFee)}</span>
            </div>
            
            <div className="totals-row total">
              <strong>Total</strong>
              <strong>${formatPrice(total)}</strong>
            </div>
            
            <button type="submit" className="payment-btn">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;