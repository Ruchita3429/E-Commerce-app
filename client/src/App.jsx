import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import "./app.scss"

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
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