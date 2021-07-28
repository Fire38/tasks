import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import RubricList from './rubricList';


const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <RubricList />
            </Provider>
        )
    }
}


export default App;

