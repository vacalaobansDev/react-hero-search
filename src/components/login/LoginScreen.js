import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const {dispatch} = useContext(AuthContext); // generamos una funcion dispatcher a partir del Context

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/');

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type:       types.login,
            payload:    {
                name: 'Yeison',
            }, 
        });

        history.replace(lastPath);

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
