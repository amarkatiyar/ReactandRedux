import { combineReducers } from "redux";
import {apidata2,apiReducer} from './reducer/apiReducer'

const rootReducer = combineReducers({
    apiReducer: apiReducer,
    apidata2: apidata2
})
export default rootReducer;