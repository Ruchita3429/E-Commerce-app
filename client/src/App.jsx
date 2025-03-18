import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import "./app.scss"
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

// Error boundary component
const ErrorBoundary = () => {
  return (
    <div className="error-page" style={{
      padding: "40px",
      textAlign: "center",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>Oops! Something went wrong</h1>
      <p>Please try again or return to the homepage</p>
      <Link to="/" style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#2879fe",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px"
      }}>
        Go to Homepage
      </Link>
    </div>
  );
};

// Placeholder pages
const AboutPage = () => (
  <div style={{ padding: "40px", minHeight: "60vh" }}>
    <h1>About Us</h1>
    <p>Welcome to MYSTORE, your number one source for all fashion needs. We're dedicated to providing you the very best of clothing, with an emphasis on quality, style, and comfort.</p>
  </div>
);

const ContactPage = () => (
  <div style={{ padding: "40px", minHeight: "60vh" }}>
    <h1>Contact Us</h1>
    <p>Get in touch with us for any inquiries or support.</p>
    <div style={{ marginTop: "20px" }}>
      <p>Email: support@mystore.com</p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Fashion Street, Style City, SC 12345</p>
    </div>
  </div>
);

const StoresPage = () => (
  <div style={{ padding: "40px", minHeight: "60vh" }}>
    <h1>Our Stores</h1>
    <p>Find our physical stores near you.</p>
    <div style={{ marginTop: "20px" }}>
      <h2>Main Outlets</h2>
      <ul>
        <li>Downtown Store - 123 Main St, City Center</li>
        <li>Fashion District - 456 Style Ave, Fashion Square</li>
        <li>Mall Location - Shop 789, Shopping Mall</li>
      </ul>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorBoundary/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
      {
        path: "/stores",
        element: <StoresPage/>,
      },
      {
        path: "*",
        element: <Navigate to="/" replace/>,
      }
    ]
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;