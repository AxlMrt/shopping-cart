/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import data from './components/data/itemData';
import Shop from './pages/shopping/Shop';
import CartPage from './pages/cart/CartPage';

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
        <Route path="/" element={<Home handleCard={handleCard} product={product} />} />
        <Route path="/shop" element={<Shop handleCard={handleCard} product={product} />} />
        <Route path="/cart" element={<CartPage addItems={addItems} deleteBtn={deleteBtn} />} />
      </Routes>
    </div>
  );
}

export default App;
