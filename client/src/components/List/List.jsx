import React from 'react';
import "./List.scss";
import Card from "../Card/Card";
import products from "../../data/product";

const List = ({ catId, maxPrice, sort, subcategories }) => {
  const data = products;

  let filteredData = [...data];

  // Filter by main category (men, women, children)
  if (catId) {
    filteredData = filteredData.filter(item => item.category.includes(catId));
  }

  // Filter by subcategories (if any selected)
  if (subcategories && subcategories.length > 0) {
    filteredData = filteredData.filter(item =>
      subcategories.some(sub => item.category.includes(sub))
    );
  }

  if (maxPrice) {
    filteredData = filteredData.filter(item => item.price <= maxPrice);
  }

  if (sort === "asc") {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredData.sort((a, b) => b.price - a.price);
  }

  return (
    <div className='list'>
      {filteredData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
