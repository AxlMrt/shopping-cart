import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import Newsletter from '../../components/newsletter/Newsletter';

function Shop({ handleCard, product }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="m-5">
          <span className="font-medium text-xl">Filter Product:</span>
          <select className="mx-5">
            <option disabled selected>
              Color
            </option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
        </div>
        <div className="m-5">
          <span className="font-medium text-xl">Sort Product:</span>
          <select className="mx-5">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
      </div>
      <h1 className="m-5 text-3xl font-bold">Dresses</h1>
      <Product handleCard={handleCard} product={product} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;
