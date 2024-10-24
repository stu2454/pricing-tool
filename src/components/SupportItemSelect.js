import React from 'react';

const SupportItemSelect = ({ selectedCategory, productData, setSelectedItem }) => {
  // Filter items by selected category
  const filteredItems = productData.filter(item => item.SupportItemCategory === selectedCategory);

  return (
    <div className="form-group">
      <label htmlFor="item" className="form-label">Select Support Item:</label>
      <select
        id="item"
        className="form-select"
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option value="">--Select a Support Item--</option>
        {filteredItems.map((item, index) => (
          <option key={index} value={item.SupportItem}>
            {item.SupportItem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SupportItemSelect;







