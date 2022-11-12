import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryItems({ item }) {
  return (
    <div className="relative h-3/4 flex-1 m-1">
      <img src={item.img} className="w-full h-screen object-cover" />
      <div className="absolute w-full h-full top-0 bottom-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl mb-5">{item.title}</h1>
        <NavLink to="/" className="button border-none bg-white">
          Shop Now
        </NavLink>
      </div>
    </div>
  );
}

export default CategoryItems;
