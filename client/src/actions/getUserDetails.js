import axio from '../helper';
import { userConstant } from './constant';

export const getUserDetails = () => {
    return async dispatch => {
        const storedUser = localStorage.getItem("user");
        const user = storedUser ? JSON.parse(storedUser) : null;
        dispatch({ type: userConstant.GET_USER_REQUEST });
        const _id = user._id;
        console.log("👉👉👉 ~~ file: getUserDetails.js:11 ~~ return ~~ _id:", _id)
        try {
            const response = await axio.get(`/user/${_id}`);
            const userDetails = response.data;
            console.log("👉👉👉 ~~ file: getUserDetails.js:14 ~~ getUserDetails ~~ userDetails:", userDetails)
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            dispatch({
                type: userConstant.GET_USER_SUCCESS,
                payload: { userDetails },
            });
        } catch (error) {
            dispatch({
                type: userConstant.GET_USER_FAILURE,
                payload: {
                    error: "User retrieval failed" // Replace with the actual error message
                }
            });
        }
    };
};
