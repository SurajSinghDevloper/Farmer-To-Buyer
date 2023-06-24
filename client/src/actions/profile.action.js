import axio from "../helper";
import { userConstant } from "./constant";

export const updateUser = (userId, updatedUser) => {
    return async (dispatch) => {
        dispatch({ type: userConstant.USER_UPDATE_REQUEST });
        try {
            const res = await axio.put(`/admin/user/${userId}`, { ...updatedUser });

            console.log("👉👉👉 ~~ file: profile.action.js:10 ~~ return ~~ res:", res)
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



