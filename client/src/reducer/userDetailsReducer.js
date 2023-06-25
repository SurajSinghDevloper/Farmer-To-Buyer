import { userConstant } from '../actions/constant';

const initialState = {
    loading: false,
    userDetails: {},
    error: ''
};

const userDetailsReducer = (state = initialState, action) => {
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
                userDetails: action.payload.userDetails,
                error: ''
            };
        case userConstant.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                userDetails: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userDetailsReducer;
