import React from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import data from './components/shop/data';

function App() {
  const [addItems, setAddItems] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = React.useState(data);

  function handleCard(card) {
    setAddItems(card);
  }

  return (
    <div>
      <Header addItems={addItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleCard={handleCard} product={product} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
