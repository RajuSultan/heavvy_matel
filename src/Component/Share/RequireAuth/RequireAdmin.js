import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Loading';
// import Loading from '../../Share/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, loadingAdmin] = useAdmin(user);
    const location = useLocation();
    // console.log(admin);
    if (loading || loadingAdmin) {
        return <Loading></Loading>;
    }

    if (!admin.admin) {
        signOut(auth);
        console.log('tut1');

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;