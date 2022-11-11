/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import data from './components/data/itemData';

function App() {
  const [addItems, setAddItems] = React.useState([]);
  const [product] = React.useState(data);

  function handleCard(card) {
    setAddItems((prevItem) => [...prevItem, card]);
  }

  function deleteBtn(event, id) {
    event.stopPropagation();
    setAddItems((items) => items.filter((item) => item.id !== id));
  }
  console.log(addItems);
  return (
    <div>
      <Header addItems={addItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleCard={handleCard} product={product} />} />
        <Route path="/cart" element={<Cart addItems={addItems} deleteBtn={deleteBtn} />} />
      </Routes>
    </div>
  );
}

export default App;
