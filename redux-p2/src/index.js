import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';

const add_remove_array_reducer = (state = [] ,action)=>{
  switch (action.type){
    case 'LISTALL':
      return state;
    case 'ADD':
      return [...state,action.value];
    case 'DELETE':
      const newState = [...state];
      newState.splice(state.indexOf(action.value),1);           //Delete Element from array
      return newState;
    case 'UPDATE':
      return '';
    default :
      return state;
  } 
}

const store = createStore(add_remove_array_reducer);

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({type:'ADD',value:'Atiq Ur Rehman'});
store.dispatch({type:'ADD',value:'Tamer'});
store.dispatch({type:'ADD',value:'Anwardeen'});
store.dispatch({type:'ADD',value:'Testing'});

ReactDOM.render(<App/>,document.getElementById('root'));