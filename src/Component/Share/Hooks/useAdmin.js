import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [loadingAdmin, setLoadingAdmin] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://quiet-taiga-42147.herokuapp.com/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data);
                    setLoadingAdmin(false)
                })
        }
    }, [user])

    return [admin, loadingAdmin];
};

export default useAdmin;