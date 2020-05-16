import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { addCharacterById } from './actions'


const store = createStore(rootReducer)
//to see if store is implemented properly we will log its state and see state elements
console.log('store,getState()', store.getState())
//subscribe function gets a hit whenever anything is changed in the store
store.subscribe(() => console.log('store', store.getState()))
//store.dispatch function will call this action creator and process its functionality, in our case it will remove that character from store
store.dispatch(addCharacterById(2))
// we wrap this root app component inside provider tag, actually to make store accessble to wholw component
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
)


