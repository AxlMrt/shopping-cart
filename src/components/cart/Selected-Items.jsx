function SelectedItems({ items, deleteBtn }) {
  return (
    <div className="w-96 flex border-2 p-5">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <img src={items.url} className="" />
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <h3 className="text-lg font-bold uppercase">{items.name}</h3>
        <p className="font-light">{items.description}</p>
        <button onClick={(event) => deleteBtn(event, items.id)} className="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SelectedItems;
