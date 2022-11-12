import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiCardsHeartOutline } from '@mdi/js';

function Items({ handleCard, card }) {
  function handleClick() {
    handleCard(card);
  }

  return (
    <div className="itemContainer">
      <div className="w-52 h-52 rounded-full bg-white absolute" />
      <img src={card.url} alt="t-shirt" className="h-3/4 z-10" />
      <div className="w-full flex items-center justify-center h-full absolute top-0 bottom-0 bg-black/[.2] opacity-0 hover:opacity-100 cursor-pointer transition-all z-10">
        <Icon path={mdiCartOutline} className="icon" onClick={handleClick} />
        <Icon path={mdiMagnify} className="icon" />
        <Icon path={mdiCardsHeartOutline} className="icon" />
      </div>
    </div>
  );
}

export default Items;
