import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryBar from '../CategoryBar/CategoryBar';


const Category = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div className='mt-5  '>
            <h2>this category</h2>

            {
                categories.map(category => <CategoryBar key={category.category_id} category={category}></CategoryBar>)
            }
        </div>
    );
};

export default Category;