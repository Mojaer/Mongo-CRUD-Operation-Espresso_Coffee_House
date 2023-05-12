import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='btn btn-warning' to='/'>Home</Link>
            <Link className='btn btn-warning' to='/addcoffee'>Add coffee</Link>

        </div>
    );
};

export default Header;