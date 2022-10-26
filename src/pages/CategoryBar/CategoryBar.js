import React from 'react';
import './CategoryBar.css'

const CategoryBar = ({ category }) => {

    return (
        <div className='list'>
            <span>{category.name}</span>
        </div>
    );
};

export default CategoryBar;