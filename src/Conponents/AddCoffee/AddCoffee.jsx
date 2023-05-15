import React from 'react';
import Swal from 'sweetalert2'
import Header from '../Header/Header';
const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const imageUrl = form.imgUrl.value;

        const newCoffee = { name, quantity, supplier, test, category, details, imageUrl }
        // console.log(coffee);

        fetch('https://espresso-emporium-coffe-server-mojaer.vercel.app/coffee', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'successfully added coffee',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                        timer: 1500
                    })
                }
            })
    }
    return (
        <>
            <Header></Header>
            <div className='mx-4' >
                <form onSubmit={handleAddCoffee} className='bg-[#F4F3F0;] p-5'>
                    <h2 className='text-3xl pb-2 font-bold'>Add Coffee</h2>

                    {/* row */}
                    <div className='md:flex my-3'>
                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Coffee Name</span>
                            </label>
                            <label className="input-group ">
                                <span>Name</span>
                                <input type="text" name='name' placeholder="Coffee name" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 grow ms-2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg"> Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Quantity</span>
                                <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered  w-11/12" />
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
                                <input type="text" placeholder="Supplier" name='supplier' className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 grow ms-2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Test</span>
                            </label>
                            <label className="input-group">
                                <span>Test</span>
                                <input type="text" placeholder="Test" name='test' className="input input-bordered  w-11/12" />
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
                                <input type="text" name='category' placeholder="Category" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 grow ms-2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Details</span>
                            </label>
                            <label className="input-group">
                                <span>Details</span>
                                <input type="text" name='details' placeholder="Details" className="input input-bordered  w-11/12" />
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
                                <input type="url" name='imgUrl' placeholder="Image Url" className="input input-bordered  w-11/12" />
                            </label>
                        </div>
                    </div>

                    <input className='btn btn-primary w-full mt-2 bg-[#D2B48C]' type="submit" value="Add Coffee" />
                </form>

            </div>
        </>

    );
};

export default AddCoffee;