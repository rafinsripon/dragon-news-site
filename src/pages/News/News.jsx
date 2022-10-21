import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
const News = () => {
    const news = useLoaderData();
    const {image_url, title, details, category_id, author, rating} = news;
    return (
        <Card className="mb-4 Regular shadow border-0 mt-5">
            
            <Card.Body>
                <div className='mb-4'>
                    <Card.Img variant="top" src={image_url}/>
                </div>
                <Card.Title className='text-center mb-3'><h5 className='text-semibold'>{title}</h5> </Card.Title>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='mt-1 fw-semibold text-secondary'> Author: {author?.name ? author.name : 'N/A'}</h5>
                    <p className='mb-0 fw-bold text-secondary'> Published Date: {author?.published_date ? author.published_date : 'N/A'}</p>
                    <div>
                    <FaStar className='text-warning fs-6 me-3'/>
                    <span className='fs-6 fw-bold mt-2'>{rating?.number}</span>
                    </div>
                </div>
                <Card.Text className='mt-3'>
                    <p>{details}</p>
                    <Link className='text-decoration-none' to={`/category/${category_id}`}>
                        <button className='btn btn-info w-50 d-block mx-auto text-white fw-bold'>Go Back</button>
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;