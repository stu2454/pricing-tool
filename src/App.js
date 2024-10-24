import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ProductCategorySelect from './components/ProductCategorySelect';
import SupportItemSelect from './components/SupportItemSelect';
import PriceFeedback from './components/PriceFeedback';
import Navbar from './components/Navbar';
import './styles.css';
import ndisLogo from './assets/NDIS_logo.png';

function App() {
  const [productData, setProductData] = useState([]); // Store CSV data
  const [selectedCategory, setSelectedCategory] = useState(''); // Store selected category, start as empty string
  const [selectedItem, setSelectedItem] = useState(null); // Store selected item
  const [thankYouView, setThankYouView] = useState(false); // Manage thank-you message view

  // Load CSV data on component mount
  useEffect(() => {
    Papa.parse(process.env.PUBLIC_URL + '/productData.csv', {
      download: true,
      header: true, // Ensure CSV headers are parsed as keys
      complete: (result) => {
        setProductData(result.data); // Store parsed CSV data
      },
    });
  }, []);

  // Extract unique categories from the CSV data
  const categories = [...new Set(productData.map(item => item.SupportItemCategory))];

  // Function to reset the state but stay on the Price Guide tab
  const resetSelection = () => {
    setSelectedCategory('');  // Reset category to empty string (default value in dropdown)
    setSelectedItem(null);    // Reset item
  };

  // Function to show the thank-you message
  const showThankYouMessage = () => {
    setThankYouView(true); // Switch to the thank-you message view
  };

  if (thankYouView) {
    return (
      <div className="App">
        <Navbar />
        <div className="header-container">
          <h1>Provider Pricing Tool</h1>
          <img
            src={ndisLogo}
            alt="NDIS Logo"
            style={{
              width: '150px',
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
        </div>
        <div className="thank-you-container">
          <div className="thank-you-message">
            <h2>Thanks for using our Price Guide tool.</h2>
            <p>If you have further questions, please do not hesitate to connect with the Assistive Technology team. Enjoy the rest of your day.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        {/* Flex container to align title and logo */}
        <div className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', textAlign: 'left' }}>Provider Pricing Tool</h1>
          <img
            src={ndisLogo}
            alt="NDIS Logo"
            style={{
              width: '150px',
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
        </div>

        {/* Product Category Select */}
        <ProductCategorySelect
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {/* Support Item Select (conditionally rendered) */}
        {selectedCategory && (
          <SupportItemSelect
            selectedCategory={selectedCategory}
            productData={productData}
            setSelectedItem={setSelectedItem}
          />
        )}

        {/* Price Feedback (conditionally rendered) */}
        {selectedItem && productData.length > 0 && (
          <PriceFeedback selectedItem={selectedItem} productData={productData} />
        )}

        {/* Button Container */}
        {selectedItem && (
          <div className="button-container">
            {/* "Choose Another" Button */}
            <button className="reset-button" onClick={resetSelection}>
              Choose another
            </button>

            {/* "I am Finished" Button */}
            <button className="finished-button" onClick={showThankYouMessage}>
              I am finished
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;





