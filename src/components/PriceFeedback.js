import React from 'react';

const PriceFeedback = ({ selectedItem, productData }) => {
  // Find the item in the product data based on the selected item
  const itemData = productData.find(item => item.SupportItem === selectedItem);

  // If no item data is found, handle it gracefully
  if (!itemData) {
    return <p>No data available for the selected item.</p>;
  }

  return (
    <div className="price-feedback">
      {/* Labels and text for feedback boxes */}
      <div className="form-group">
        <label className="form-label">Support Item Code:</label>
        <div className="item-code-box">
          <p>{itemData.SupportItemNumber}</p>  {/* Display item code */}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Description:</label>
        <div className="description-box">
          <p>{itemData.Description}</p>  {/* Display description */}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Price Range:</label>
        <div className="price-range-box">
          <p>Based on market data, prices for this item vary between ${itemData.P25} and ${itemData.P75}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceFeedback;






