import React from 'react';

const ProductCategorySelect = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className="form-group">
      <label htmlFor="category" className="form-label">Select Product Category:</label>
      <select
        id="category"
        className="form-select"
        value={selectedCategory} // Bind the dropdown value to the selectedCategory state
        onChange={(e) => setSelectedCategory(e.target.value)} // Update the selected category state
      >
        <option value="">---Select a Category---</option> {/* Placeholder when selectedCategory is empty */}
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductCategorySelect;















