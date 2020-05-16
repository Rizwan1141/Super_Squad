
import { combineReducers } from 'redux'
import characters from './characters_reducer'
import heroes from './heroes_reducer'


const rootReducer = combineReducers({
    characters,//characters: characters, // as both sides are same we would reduce it to one
    heroes //heroes: heroes
})

export default rootReducer;