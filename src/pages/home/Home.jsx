import React from 'react';
import Category from '../../components/categorie/Category';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero-slider/Hero';
import Newsletter from '../../components/newsletter/Newsletter';
import Product from '../../components/product/Product';

function Home({ handleCard, product }) {
  return (
    <div>
      <Hero />
      <Category />
      <Product handleCard={handleCard} product={product} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
