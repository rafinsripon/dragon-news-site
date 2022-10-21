import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div className='mt-5'>
            <h2>This is category has news: {categoryNews.length}</h2>
            <div>
                {
                    categoryNews.map(news => <NewsSummaryCard 
                    key={categoryNews._id}
                    news={news}
                    />)
                }
            </div>
        </div>
    );
};

export default Category;