import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryBar from '../CategoryBar/CategoryBar';


const Category = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div>
            <h2>category{categories.length}</h2>
            {
                categories.map(category => <CategoryBar key={category.category_id} category={category}></CategoryBar>)
            }
        </div>
    );
};

export default Category;