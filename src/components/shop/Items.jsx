function Items({ handleCard, card }) {
  function handleClick() {
    handleCard(card);
  }

  return (
    <div className="flex flex-col gap-3 border-2 py-3 px-6">
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      <p>{card.price} $</p>
      <button className="border-2 border-black py-0.5" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Items;
