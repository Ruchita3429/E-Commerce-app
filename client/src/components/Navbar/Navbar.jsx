import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { getCartCount } = useCart();
    
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className="item">
                        <img src="/img/INDIA.png" alt="India flag"/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>INR</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/women">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/men">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/children">Children</Link>
                    </div>
                </div>

                <div className='centre'>
                    <Link className='link' to="/">MYSTORE</Link>
                </div>

                <div className='right'>
                    <div className="item">
                        <Link className='link' to="/">HomePage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/about">About</Link>
                    </div>
                    
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>{getCartCount()}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar