import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index'
import { createCharacter } from './helpers'

/// ... (triple dots) are called spread on, what this does is, it takes all the existing properties, members etc of an object/array and append the new members as well
// like here in state, it would fetch all state objects and append new object which we passed
function heroes(state= [], action){
    let heroes;
    switch(action.type){
        case ADD_CHARACTER:
            heroes = [...state, createCharacter(action.id)]
            return heroes
        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id)
            return heroes
        default:
            return state
    }
}





export default heroes;