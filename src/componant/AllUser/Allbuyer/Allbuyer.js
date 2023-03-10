import React from 'react';

const Allbuyer = () => {
    return (
        <div>
            <h1>All buyer</h1>
            <div className="table-res">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Nastalati</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...Array(50)].map((_, i) => <tr
                                key={i}
                            >
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>example@gmail.com</td>
                                <td>01791036987</td>
                                <td>Dhaka, Bangladesh</td>
                                <td>Bangladesh</td>
                                <td><button className='btn btn-outline-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyer;