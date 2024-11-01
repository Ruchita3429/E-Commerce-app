import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          MYSTORE is an e-commerce website designed to provide a seamless shopping experience, offering a wide range of products across various categories such as electronics, fashion, home goods, and more. With a user-friendly interface, secure payment options, and fast delivery services, MYSTORE caters to the diverse needs of customers, ensuring convenience and satisfaction.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Email : mhatreruchita@gmail.com
            </span>
            <span>
            Phone Number : 09230724973
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MYSTORE</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;