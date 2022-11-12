/* eslint-disable prettier/prettier */
import React from 'react';
import data from '../data/categoriesData';
import CategoryItems from './CategoryItems';

function Category() {
  return (
    <div className='flex p-5 flex-wrap justify-between'>
      {
        data.map((item, idx) => (
          <CategoryItems key={idx} item={item}/>
        ))
      }
    </div>
  );
}

export default Category;
