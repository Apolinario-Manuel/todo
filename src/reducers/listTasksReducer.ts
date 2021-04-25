import { HYDRATE } from 'next-redux-wrapper'
import { LIST_UPDATE } from '../actions/actionTypes'
import { loadLists } from '../services/api'

const initialState = {
    listData: loadLists()
}

export const listTasksReducer = (state = initialState, action) => {
    switch(action.type){
        case HYDRATE:
            return { ...state, ...action.listData }
        case LIST_UPDATE:
            return {
                listData:action.listData
            }
        default:
            return state
    }
}