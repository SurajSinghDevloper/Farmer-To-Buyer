import axio from '../helper'
import { authConstant } from './constant'; // Import your action types from a separate file

import { userConstant } from './constant';

export const signup = (user) => {
    console.log("👉👉 ~~ file: auth.action.js:6 ~~ login ~~ user:", user);
    return async (dispatch) => {
        dispatch({ type: userConstant.USER_REGISTER_REQUEST });
        try {
            const res = await axio.post(`/admin/signup`, { ...user });

            if (res.status === 200) {
                const { message } = res.data;
                dispatch({
                    type: userConstant.USER_REGISTER_SUCCESS,
                    payload: { message }
                });

            } else {
                if (res.status === 400) {
                    dispatch({
                        type: userConstant.USER_REGISTER_FAILURE,
                        payload: {
                            error: res.data.error
                        }
                    });
                }
            }
        } catch (error) {
            console.log("Error:", error);
            dispatch({ type: userConstant.USER_REGISTER_FAILURE });
        }
    };
};



export const login = (user) => {
    console.log("👉👉 ~~ file: auth.action.js:6 ~~ login ~~ user:", user);
    return async (dispatch) => {
        dispatch({ type: authConstant.LOGIN_REQUEST });
        try {
            const res = await axio.post(`/admin/signin`, { ...user });
            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: authConstant.LOGIN_SUCCESS,
                    payload: { token, user }
                });
            } else {
                if (res.status === 400) {
                    dispatch({
                        type: authConstant.LOGIN_FAILURE,
                        payload: { error: res.data.error }
                    });
                }
            }
        } catch (error) {
            console.log("Error:", error);
            dispatch({ type: authConstant.LOGIN_FAILURE });
        }
    };
};


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: { token, user }
            });
        } else {
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error: 'Failed To Login, try again!' }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstant.LOGOUT_REQUEST });
        const res = await axio.post(`/admin/signout`);
        if (res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstant.LOGOUT_SUCCESS
            })
        } else {
            dispatch({
                type: authConstant.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}