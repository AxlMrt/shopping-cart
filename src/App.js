import React from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignIn from './components/sign-in/SignIn';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
