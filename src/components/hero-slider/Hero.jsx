/* eslint-disable prettier/prettier */
import React from 'react';

import { mdiArrowLeft } from '@mdi/js';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import data from '../data/heroData';
import HeroItem from './HeroItem';

function Hero() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  function handleClick(direction) {
    if (direction === 'left') setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    if (direction === 'right') setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);

  }

  const style = {
    transform: `translateX(${slideIndex * -100}vw)`,
    transition: 'all 1.5s ease',
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
              <HeroItem hero={hero} />
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

export default Hero;
