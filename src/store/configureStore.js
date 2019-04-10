import {createStore, combineReducers} from 'redux'
import nameReducer from './reducers/name'


const rootReducer = combineReducers({
    names: nameReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore