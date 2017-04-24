import Reducers from '../Reducers';
import {createStore} from 'redux';

const store = createStore(Reducers);
store.subscribe(
    ()=>{
        console.log(store.getState());
    }
);
export default store;