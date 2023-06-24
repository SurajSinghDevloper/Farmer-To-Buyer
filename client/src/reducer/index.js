import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import profileReducer from './updateUser.reducer'
import getuser from './getUser.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
    getUser: getuser
})

export default rootReducer;