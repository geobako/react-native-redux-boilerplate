import {CHANGE_NAME} from '../actions/actionTypes'


const initialState = {
    name:'George'
}

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
           return {
            ...state,
            name:action.name
           } 
        default:
            return state
    }
}

export default nameReducer