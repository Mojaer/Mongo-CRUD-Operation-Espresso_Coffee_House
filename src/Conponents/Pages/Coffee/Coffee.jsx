import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const update = coffees.filter(cof => cof._id !== id)
                            setCoffees(update)

                        }
                    })
            }
        })
        fetch('')
    }
    const { name, quantity, supplier, test, category, details, imageUrl, _id } = coffee
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={imageUrl} className='h-40' alt="Movie" /></figure>
                <div className="card-body flex flex-row justify-between items-center">
                    <div>
                        <h2 className="card-title"><strong>Name:</strong> {name}</h2>
                        <h2 className="card-title"><strong>Supplier:</strong> {supplier}</h2>
                        <h2 className="card-title"><strong>Quantity:</strong> {quantity}</h2>
                    </div>
                    <div className="card-actions justify-end flex-col ">
                        <Link className="btn btn-primary" to={`/coffee/${_id}`}>View</Link>
                        <Link className="btn btn-primary" to={`/updatecoffee/${_id}`}>Edit</Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-700">delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Coffee;