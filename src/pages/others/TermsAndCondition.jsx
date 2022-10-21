import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Here is our terms & conditions</h2>
            <p>Go Back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;