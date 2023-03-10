import React from 'react';
import avtor from '../../../asset/imgavator.jpg'
import './Allagent.css'

const Allagent = () => {
    return (
        <div>
            <h1>All agent list</h1>
            <div className="table-res">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pictur</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Verify</th>
                            <th scope="col">Preeze</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(50)].map((_, i) => <tr
                            key={i}
                        >
                            <th scope="row">1</th>
                            <td><img style={{ verticalAlign: "middle", width: "35px", height: "35px", borderRadius: "50%" }} src={avtor} alt="" /></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>017910369987</td>
                            <td>dhaka, bangladesh</td>
                            <td className='text-danger'><b>unverify</b></td>
                            <td>unpreeze</td>
                            <td><button className='btn btn-outline-danger'>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allagent;