import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css'

const CategoryBar = ({ category }) => {

    return (

        <div className='list'>
            <Link to='/coursedetails'>{category.name}</Link>
        </div>
    );

};

export default CategoryBar;