import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counter from './Reducers';
import App from './Components/App';

let store = createStore(counter);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({type:'INCREMENT_ACTION'});
store.dispatch({type:'INCREMENT_ACTION'});
store.dispatch({type:'DECREMENT_ACTION'});

ReactDOM.render(
                <Provider store={store}>
                    <div>
                    <App/>
                    </div>
                </Provider>
                ,document.getElementById('root')
                );
