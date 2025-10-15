import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "99000",
      shortDescription: "High-performance laptop for students",
      image: "/laptop.jpg",
      extendedDescription: "This powerful laptop features an Intel i7 processor, 16GB RAM, 512GB SSD, and a 15.6-inch display. Perfect for coding, design work, and all your academic needs."
    },
    {
      id: 2,
      name: "Textbook",
      price: "1000",
      shortDescription: "Advanced React Programming",
      image: "/textbok.jfif",
      extendedDescription: "Comprehensive guide to modern React development with hooks, context API, and best practices. Includes real-world projects and exercises."
    },
    {
      id: 3,
      name: "Calculator",
      price: "1500",
      shortDescription: "Scientific calculator for engineering",
      image: "/calculator.jpg",
      extendedDescription: "Advanced scientific calculator with 300+ functions, solar power, and large display. Ideal for engineering and mathematics students."
    },
    {
      id: 4,
      name: "Backpack",
      price: "5000",
      shortDescription: "Water-resistant campus backpack",
      image: "/download.jfif",
      extendedDescription: "Durable water-resistant backpack with laptop compartment, multiple pockets, and ergonomic straps. Perfect for carrying books and tech gear across campus."
    }
  ];

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <div className="product-popup-container">
        <h1> KL University Online Store</h1>
        <p className="store-description">Click on any product to view details</p>
        
        
        <div className="product-list">
          {products.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => openPopup(product)}
            >
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="short-description">{product.shortDescription}</p>
              <span className="click-hint">View details</span>
            </div>
          ))}
        </div>

       
        {isPopupVisible && selectedProduct && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="close-button" onClick={closePopup}>
                ×
              </button>
              
              <div className="popup-body">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="product-image"
                />
                
                <div className="product-details">
                  <h2>{selectedProduct.name}</h2>
                  <p className="popup-price">{selectedProduct.price}</p>
                  <p className="extended-description">
                    {selectedProduct.extendedDescription}
                  </p>
                  
                  <div className="popup-actions">
                    <button className="add-to-cart-btn">
                      Add to Cart
                    </button>
                    <button className="wishlist-btn">
                       Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
