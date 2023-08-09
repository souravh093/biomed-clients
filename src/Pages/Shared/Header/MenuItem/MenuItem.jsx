import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({name, path}) => {
    return (
        <div>
            <Link className='text-gray-700 font-medium hover:text-gray-900' to={path}>
                <li>{name}</li>
            </Link>
        </div>
    );
};

export default MenuItem;