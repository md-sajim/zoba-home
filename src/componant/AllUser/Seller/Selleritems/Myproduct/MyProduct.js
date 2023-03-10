import React from 'react';
import './MyProduct.css'

const MyProduct = () => {
    return (
        <div>
            <h2>My Property</h2>
            <div className="table-res">
                <table className="table caption-top">
                    <caption>List of property</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Present price</th>
                            <th scope="col">Purchase price</th>
                            <th scope="col">Address</th>
                            <th scope="col">Area</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(50)].map((_, i) => <tr
                            key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>1000000</td>
                            <td>700000</td>
                            <td>Mirput-1,Dhaka,Bangladesh</td>
                            <td>3 khata</td>
                            <td>Unsold</td>
                            <td><button className='btn btn-outline-danger'>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;