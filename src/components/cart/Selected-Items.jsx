function SelectedItems({ items, deleteBtn }) {
  console.log(items);
  return (
    <div>
      <p>{items.name}</p>
      <button onClick={(event) => deleteBtn(event, items.id)}>Delete</button>
    </div>
  );
}

export default SelectedItems;
