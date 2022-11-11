/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { mdiArrowLeft } from '@mdi/js';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import data from '../data/heroData';

function Home() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  function handleClick(direction) {
    if (direction === 'left') setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  }

  const style = {
    // eslint-disable-next-line quotes
    transform: `translateX(${slideIndex * -100}vw)`,
  }

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      <div className="arrow left-2.5">
        <Icon path={mdiArrowLeft} size={1} onClick={() => handleClick('left')}/>
      </div>
      <div className="h-full flex" style={style}>
        {
          data.map((hero, idx) => (
            <div key={idx} className={`flex items-center w-screen h-screen ${hero.bg}`}>
              <div className="flex-1 h-full">
                <img src={hero.img} className="h-4/5" />
              </div>
              <div className="flex-1 p-12">
                <h1 className="text-7xl">{hero.title}</h1>
                <p className="my-12 text-xl font-medium tracking-wide">{hero.desc}</p>
                <NavLink to="/shop" className="text-xs p-2.5 border-2 border-stone-400 cursor-pointer">
                  SHOP NOW
                </NavLink>
              </div>
            </div>
          ))
        }
      </div>
      <div className="arrow right-2.5">
        <Icon path={mdiArrowRight} size={1} onClick={() => handleClick('right')}/>
      </div>
    </div>
  );
}

export default Home;
