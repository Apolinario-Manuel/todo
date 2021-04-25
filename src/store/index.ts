import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { Reducers } from '../reducers'

const makeStore = () => {

    const store = createStore(Reducers, composeWithDevTools())

    return store
}

export const storeWrapper = createWrapper(makeStore, { debug: false })