import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/**
 * import redux store Step ( 1 )
 */
import {createStore} from 'redux';

/**
 * Create Reducer counter and define actions ( 2 )
 */
function counter_reducer(state_val = 0,action){
  switch(action.type){
    case 'INCREMENT':
      return state_val + 1;
    case 'DECREMENT':
      return state_val - 1;
    default:
      return state_val;
  }
}

/**
 * Create Store and pass reducer and paramater ( 3 )
 */
const store = createStore(counter_reducer);

/**
 *  This is only use for state values.
 */
store.subscribe(()=>{
  console.log(store.getState());
})

/**
 * Call actions step (4)
 */
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
