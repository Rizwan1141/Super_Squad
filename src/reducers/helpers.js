import characaters_json from '../data/characters.json'


export function createCharacter(id){
    let character = characaters_json.find(c => c.id ===id)
    return character
}