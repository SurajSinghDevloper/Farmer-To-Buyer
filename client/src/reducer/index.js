import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import profileReducer from './updateUser.reducer';
import userDetailsReducer from './userDetailsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
    userDetails: userDetailsReducer // Corrected naming
});

export default rootReducer;
