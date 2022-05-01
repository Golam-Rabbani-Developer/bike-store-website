import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebaseinit';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner style={{ width: "50px" }} className="mx-auto" animation="grow" />
            <Spinner style={{ width: "50px" }} className="mx-auto" animation="grow" />
            <Spinner style={{ width: "50px" }} className="mx-auto" animation="grow" />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;