import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Header/Header';

const SingleCoffee = () => {
    const coffee = useLoaderData();

    const { name, quantity, supplier, test, category, details, imageUrl, _id } = coffee


    return (
        <div>
            <Header></Header>
            <img src={imageUrl} alt="" />
        </div>
    );
};

export default SingleCoffee;