import React from 'react'
import { Switch } from 'react-router-dom';
import { types } from '../types/types';

// const state = {
//     name: 'Yei',
//     logged: true,
// };

export const authReducer = ( state = {}, action ) => {
    switch (action.type) {

        case types.login:
            
            return {
                ...action.payload,
                logged: true
            };

        case types.logout:
            
            return {
                logged: false
            };
    
        default:
            return state;
    }
};

