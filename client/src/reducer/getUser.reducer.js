import { userConstant } from '../actions/constant';

const initialState = {
    loading: false,
    user: null,
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstant.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                error: ''
            };
        case userConstant.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userReducer;
