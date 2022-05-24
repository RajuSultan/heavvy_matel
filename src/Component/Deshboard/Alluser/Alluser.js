import React, { useState } from 'react';
import User from './User/User';

const Alluser = () => {
    const [users, setUsers] = useState([]);
    fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    // console.log(users);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <User key={user._id} user={user}></User>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;