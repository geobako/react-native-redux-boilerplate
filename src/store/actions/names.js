import {CHANGE_NAME} from './actionTypes'

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        name: name
    }
}