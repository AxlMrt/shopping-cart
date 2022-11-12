import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';

function Shop({ handleCard, product }) {
  return (
    <div>
      <h1>Dresses</h1>
      <Product handleCard={handleCard} product={product} />
      <Footer />
    </div>
  );
}

export default Shop;
