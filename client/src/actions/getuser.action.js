import axio from "../helper";
import { userConstant } from "./constant";

export const getUser = (userId) => {
    return async (dispatch) => {
        dispatch({ type: userConstant.GET_USER_REQUEST });
        try {
            const res = await axio.get(`/admin/user/${userId}`);

            console.log("👉👉👉 ~~ file: profile.action.js:10 ~~ return ~~ res:", res)
            if (res.status === 200) {
                const user = res.data;
                dispatch({
                    type: userConstant.GET_USER_SUCCESS,
                    payload: { user }
                });
            } else {
                if (res.status === 404) {
                    dispatch({
                        type: userConstant.GET_USER_FAILURE,
                        payload: {
                            error: res.data.error
                        }
                    });
                }
            }
        } catch (error) {
            console.log("Error:", error);
            dispatch({ type: userConstant.GET_USER_FAILURE });
        }
    };
};
