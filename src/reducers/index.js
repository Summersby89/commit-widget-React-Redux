import { combineReducers } from 'redux'
import commentsReducer from './comments'
import formReducer from './form'

const rootReducer = combineReducers({
    comments: commentsReducer,
    form: formReducer
})

export default rootReducer;


