import Cart from '../../components/cart/Cart';
import Footer from '../../components/footer/Footer';
import { NavLink } from 'react-router-dom';

function CartPage({ addItems, deleteBtn }) {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-3xl text-center">Your bag ( {addItems.length} )</h1>
        <div className="flex items-center justify-between p-5">
          <NavLink to="/shop" className="button">
            Continue shopping
          </NavLink>

          <NavLink to="/" className="button border-none bg-black text-white ">
            Checkout now
          </NavLink>
        </div>
        <div>
          <div className="shop-item-container">
            <Cart addItems={addItems} deleteBtn={deleteBtn} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
