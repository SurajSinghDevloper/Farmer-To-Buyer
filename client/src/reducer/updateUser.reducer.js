import { userConstant } from '../actions/constant';

const initialState = {
    updating: false,
    message: '',
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.USER_UPDATE_REQUEST:
            return {
                ...state,
                updating: true
            };
        case userConstant.USER_UPDATE_SUCCESS:
            return {
                ...state,
                updating: false,
                message: action.payload.message,
                error: ''
            };
        case userConstant.USER_UPDATE_FAILURE:
            return {
                ...state,
                updating: false,
                message: '',
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userReducer;
