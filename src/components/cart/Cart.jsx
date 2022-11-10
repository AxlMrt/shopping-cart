/* eslint-disable prettier/prettier */
import SelectedItems from './Selected-Items';

function Cart({ addItems, deleteBtn }) {
  return (
    <div>
      {
        addItems.map((items, idx) => (
          <SelectedItems key={idx} items={items} deleteBtn={deleteBtn} />
        ))
      }
    </div>
  );
}

export default Cart;
