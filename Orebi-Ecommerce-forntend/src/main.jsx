import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/Layout/RootLayout.jsx';
import Home from './components/pages/Home.jsx';
import Shop from './components/pages/Shop.jsx';
import ProductInside from './components/pages/ProductInside.jsx';
import About from './components/pages/About.jsx';
import Contacts from './components/pages/Contacts.jsx';
import Login from './components/pages/Login.jsx';
import Signup from './components/pages/Signup.jsx';
import MyAccount from './components/pages/MyAccount.jsx';
import Cart from './components/pages/Cart.jsx';
import CartLayout from './components/Layout/CartLayout.jsx';
import Checkout from './components/pages/Checkout.jsx';
import Error from './components/pages/Error.jsx';
import Variants from './components/pages/Variants.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop/> } />
        <Route path="/shop/variants/:productId" element={<Variants />}/>
        <Route path="/product" element={<ProductInside />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/error" element={<Error />}/>
        

      
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
