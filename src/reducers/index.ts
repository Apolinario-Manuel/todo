import { listTasksReducer } from './listTasksReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
    listTasksState: listTasksReducer
})