import React from 'react';
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const allProducts = [
  { id: 1, title: "Men's Running Shoes", category: "shoes-men", img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600", img2: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1600", isNew: true, oldPrice: 320, price: 270 },
  { id: 10, title: "Women's Sneakers", category: "shoes-women", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600", img2: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1600", isNew: true, oldPrice: 300, price: 220 },
  { id: 19, title: "Summer Dress", category: "dresses-women", img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600", img2: "https://images.pexels.com/photos/2235072/pexels-photo-2235072.jpeg?auto=compress&cs=tinysrgb&w=1600", isNew: true, oldPrice: 400, price: 300 },
  { id: 25, title: "Kids Sports Shoes", category: "shoes-children", img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600", img2: "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=1600", isNew: false, oldPrice: 200, price: 150 },
  { id: 22, title: "Leather Bag", category: "accessories-women", img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600", img2: "https://images.pexels.com/photos/207300/pexels-photo-207300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", isNew: false, oldPrice: 550, price: 450 },
  { id: 4, title: "Slim Fit Jeans", category: "pants-men", img: "https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=1600", img2: "https://images.pexels.com/photos/6311391/pexels-photo-6311391.jpeg?auto=compress&cs=tinysrgb&w=1600", isNew: false, oldPrice: 500, price: 400 },
];

const featuredIds = [1, 10, 19];
const trendingIds = [25, 22, 4];

const FeaturedProducts = ({ type }) => {
  let productsToShow = [];
  if (type === "featured") {
    productsToShow = allProducts.filter(p => featuredIds.includes(p.id));
  } else if (type === "trending") {
    productsToShow = allProducts.filter(p => trendingIds.includes(p.id));
  }

  return (
    <div className='featuredProducts'>
      <div className="top"> <h1>{type} products</h1>
        <p>Explore our Trending & Featured Products—a curated collection of this season's hottest finds! From game-changing tech to fashion-forward styles, these top-rated picks are flying off the shelves. Don't miss out on what everyone's raving about—shop now and upgrade your lifestyle with the best of the best!</p>
      </div>
      <div className="bottom">
        {productsToShow.map(item =>
          <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;