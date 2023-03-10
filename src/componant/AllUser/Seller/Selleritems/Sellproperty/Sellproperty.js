import React from 'react';
import './Sellproperty.css'

const Sellproperty = () => {
    return (
        <div>
            <h2>Sold property</h2>
            <div className="table-res">
                <table className="table caption-top">
                    <caption>List of alrady sell property</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Sell price</th>
                            <th scope="col">Selling Date</th>
                            <th scope="col">Clint name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(50)].map((_, i) => <tr
                            key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>1000000</td>
                            <td>3/6/2023</td>
                            <td>sk amlon</td>
                            <td>01791036987</td>
                            <td>exam@gmail.com</td>
                            <td>Mirput-1,Dhaka,Bangladesh</td>
                            <td>3 khata</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellproperty;