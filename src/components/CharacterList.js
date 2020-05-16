import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions'

// connect function allow this component to fetch data from store, it connects this component to store

class CharacterList extends Component {
    render(){
        console.log('this.props', this.props)
        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                {
                    this.props.characters.map(character => {
                        return (
                            <li key={character.id} className="list-group-item">
                                <div className="list-item">{character.name}</div>
                                <div
                                    className="list-item right-button" 
                                    onClick={() => this.props.addCharacterById(character.id)}
                                >
                                    +
                                </div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>            
        )
    }
}


//MapStateToProps, inside Connect, whatever we want from store we map it through this functino then that info from store is available as props inside this component
function mapStateToProps(state) {
    console.log('state', state)
    return {
        characters: state.characters
    }
}

// mapDispatchToProps, this binds our action creators to our component , in this our component can call actionCreator which will dispatch action and ultimately action will call reducer to update the store
// for this purpose redux function bindActionCharacter is used
function mapDispatchToProps(dispatch){
    return bindActionCreators({ addCharacterById }, dispatch)
}

//we can use shortcut to use mapDispatchtoProps, we can simply pass actionCreator names in curly braces as second parameter to connect function like below
//export default connect(mapStateToProps, { addCharacterById }) (CharacterList)
export default connect(mapStateToProps, mapDispatchToProps) (CharacterList)