export const ADD_CHARACTER = 'ADD_CHARACTER'
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'

// here inside actions/index.js what we define are actually not actions, these are action creators,
// these action creators what they return is an action, so an action consist of two params, type and data, on the basis of which reducer update the store

export function addCharacterById(id){
    const action ={
        type: ADD_CHARACTER,
        id //id: id we just use es6 syntax so replaced this by one id
    }
    return action
}

export function removeCharacterById(id){
    const action ={
        type: REMOVE_CHARACTER,
        id //id: id we just use es6 syntax so replaced this by one id
    }
    return action
}