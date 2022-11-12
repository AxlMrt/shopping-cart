import { NavLink } from 'react-router-dom';

function HeroItem({ hero }) {
  return (
    <>
      <div className="flex-1 h-full">
        <img src={hero.img} className="h-4/5" />
      </div>
      <div className="flex-1 p-12">
        <h1 className="text-7xl">{hero.title}</h1>
        <p className="my-12 text-xl font-medium tracking-wide">{hero.desc}</p>
        <NavLink to="/shop" className="button">
          SHOP NOW
        </NavLink>
      </div>
    </>
  );
}

export default HeroItem;
