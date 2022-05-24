import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const useTokens = (user) => {
    const [userA] = useAuthState(auth);
    console.log(user);

    const [token, setToken] = useState("");

    useEffect(() => {
        const email = user?.email;
        const name = user?.displayName;
        const currentUser = { email: email, name: name };
        console.log(email);
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
            // fetch(`http://localhost:5000/user`)
            //     .then(res => res.json())
            //     .then(data => console.log(data))
        }
    }, [user])
    return [token];
}


export default useTokens;