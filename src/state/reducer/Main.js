import {ChangeState} from "./reducer"
import {ChangeLogoutState} from "./reducer"
import {  combineReducers  } from 'redux'


export const Reducers = combineReducers({
    ChangeState,
    ChangeLogoutState
})