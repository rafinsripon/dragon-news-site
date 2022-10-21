import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";


const NewsSummaryCard = ({news}) => {
    const {_id, image_url, title, details, total_view, author, rating} = news;

    // console.log(news)
    return (
        <Card className="mb-4 Regular shadow border-0">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <img className='rounded-circle' style={{height: '50px'}} src={author?.img} alt="" />
                    <div className='ms-4'>
                        <h6 className='mb-1 fw-bold'>{author?.name ? author.name : 'N/A'}</h6>
                        <p className='mb-0'>{author?.published_date ? author.published_date : 'N/A'}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-3 fs-5' />
                    <FaShareAlt className='me-3 fs-5' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center mb-3'><h4 className='text-semibold'>{title}</h4> </Card.Title>
                <Card.Img variant="top" src={image_url}/>
                <Card.Text className='mt-3'>
                    {details.length > 250 ? 
                    <span className='fw-semibold text-secondary'>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span>
                    :
                    <span>{details}</span>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center p-3">
                <div>
                    <FaStar className='text-warning fs-4 me-3'/>
                    <span className='fs-5 fw-bold mt-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='text-danger fs-4 me-3'/>
                    <span className='fs-5 fw-bold mt-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;