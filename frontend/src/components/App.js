import React, { Component } from 'react';
import { createStore } from 'redux';
import { initialState } from './initialState';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';



const store = createStore(rootReducer);

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Roman3'
        }

    }

    render(){
        return (
            <Provider store={store}>
                { this.state.name }
            </Provider>
        )
    }
}

export default App;

