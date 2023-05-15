// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import AddCoffee from '../Conponents/AddCoffee/AddCoffee';
import SingleCoffee from '../Conponents/Pages/SingleCoffee/SingleCoffee';
import UpdateCoffee from '../Conponents/Pages/UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://espresso-emporium-coffe-server-mojaer.vercel.app/coffee'),
    },
    {
        path: "/coffee/:id",
        element: <SingleCoffee></SingleCoffee>,
        loader: ({ params }) => fetch(`https://espresso-emporium-coffe-server-mojaer.vercel.app/coffee/${params.id}`)

    },
    {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://espresso-emporium-coffe-server-mojaer.vercel.app/coffee/${params.id}`)

    },
    {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>
    },
    {
        path: "updatecoffee",
        element: <UpdateCoffee></UpdateCoffee>,
    },
]);

export default router;

