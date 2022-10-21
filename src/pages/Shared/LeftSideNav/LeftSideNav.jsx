import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='mt-5'>
            <h5 className='fw-bold border-bottom border-4'>All Categories</h5>
            <div className='mt-2'>
            {
                categories.map(category => <div key={category.id} className='mt-2'>
                    <Link className='fw-semibold fs-5' to={`/category/${category.id}`}>{category.name}</Link>
                </div>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;