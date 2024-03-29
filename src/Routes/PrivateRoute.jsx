import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className='progress w-56'></progress>
    }
    if(user){
        return children;
    }
    return (
        <div>
            return <Navigate state={{ from: location }} to='/login' replace></Navigate>
        </div>
    );
};

export default PrivateRoute;