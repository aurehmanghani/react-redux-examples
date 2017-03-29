Redux Steps :<br>
<br>
Step 1 )<br>
npm install --save redux<br>

Step 2 )<br>
index.js file import package.<br>
import {createStore} from 'redux';<br>

Step 3)<br>
add reducer function<br>
```function counter_reducer(state_val = 0,action){
  switch(action.type){
    case 'INCREMENT':
      return state_val + 1;
    case 'DECREMENT':
      return state_val - 1;
    default:
      return state_val;
  }
}```

Step 4)<br>
Create Store.<br>
const store = createStore(counter_reducer);<br>

Step 5)<br>
This step is not important this is only use for view state values.<br>
store.subscribe(()=>{<br>
  console.log(store.getState());<br>
})<br>

step 6)<br>
Call Actions.<br>
store.dispatch({type:'INCREMENT'});<br>
store.dispatch({type:'INCREMENT'});<br>
store.dispatch({type:'DECREMENT'});<br>