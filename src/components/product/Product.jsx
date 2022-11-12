/* eslint-disable prettier/prettier */
import Items from './Items';

function Product({ handleCard, product }) {
  return (
    <div className="grid grid-cols-3 p-8 gap-3">
      {
        product.map((items, idx) => (
          <Items
            key={idx}
            handleCard={handleCard}
            card={items}
          />
        ))
      }
    </div>
  );
}

export default Product;
