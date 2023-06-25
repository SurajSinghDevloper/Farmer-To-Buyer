import axio from "../helper";
import { userConstant } from "./constant";

export const updateUser = (updatedUser) => {
    return async (dispatch) => {
        dispatch({ type: userConstant.USER_UPDATE_REQUEST });
        try {
            const storedUser = localStorage.getItem("userDetails");
            const user = storedUser ? JSON.parse(storedUser) : null;
            const userId = user._id;
            const res = await axio.post(`/user/${userId}`, { ...updatedUser });

            if (res.status === 200) {
                const { message } = res.data;
                dispatch({
                    type: userConstant.USER_UPDATE_SUCCESS,
                    payload: { message }
                });
            } else {
                if (res.status === 400) {
                    dispatch({
                        type: userConstant.USER_UPDATE_FAILURE,
                        payload: {
                            error: res.data.error
                        }
                    });
                }
            }
        } catch (error) {
            console.log("Error:", error);
            dispatch({ type: userConstant.USER_UPDATE_FAILURE });
        }
    };
};



