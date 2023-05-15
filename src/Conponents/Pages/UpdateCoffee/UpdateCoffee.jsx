import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Header/Header';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    // console.log(coffee)
    const { name, quantity, supplier, test, category, details, imageUrl, _id } = coffee

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const imageUrl = form.imgUrl.value;

        const updatedCoffee = { name, quantity, supplier, test, category, details, imageUrl }
        // console.log(coffee);

        fetch(`https://espresso-emporium-coffe-server-mojaer.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'successfully updated coffee',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer: 2000
                    })
                }
            })


    }

    return (
        <>
            <Header></Header>
            <div className='mx-4'>
                <form onSubmit={handleUpdateCoffee} className='bg-[#F4F3F0;] p-5'>
                    <h2 className='text-3xl pb-2 font-bold'>Update Coffee: {name}</h2>

                    {/* row */}
                    <div className='md:flex my-3'>
                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Coffee Name</span>
                            </label>
                            <label className="input-group ">
                                <span>Name</span>
                                <input type="text" name='name' defaultValue={name} placeholder="Coffee name" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 grow ms-2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg"> Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Quantity</span>
                                <input type="number" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                    </div>
                    {/* row */}
                    <div className='md:flex my-3'>
                        <div className="   md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Supplier</span>
                            </label>
                            <label className="input-group ">
                                <span>supplier</span>
                                <input type="text" placeholder="Supplier" defaultValue={supplier} name='supplier' className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 grow ms-2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Test</span>
                            </label>
                            <label className="input-group">
                                <span>Test</span>
                                <input type="text" placeholder="Test" defaultValue={test} name='test' className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                    </div>
                    {/* row */}
                    <div className='md:flex my-3'>
                        <div className="   md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Category</span>
                            </label>
                            <label className="input-group ">
                                <span>Category</span>
                                <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 grow ms-2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Details</span>
                            </label>
                            <label className="input-group">
                                <span>Details</span>
                                <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                    </div>
                    {/* row */}
                    <div className='md:flex my-3'>
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Image Url</span>
                            </label>
                            <label className="input-group ">
                                <span>Category</span>
                                <input type="url" name='imgUrl' defaultValue={imageUrl} placeholder="Image Url" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                    </div>

                    <input className='btn btn-primary w-full mt-2 bg-[#D2B48C]' type="submit" value="Update Coffee" />
                </form>
            </div>
        </>

    );
};

export default UpdateCoffee;