export default function counter(counter = 0,action){
    switch(action.type){
        case 'INCREMENT_ACTION':
            return counter + 1;
        case 'DECREMENT_ACTION':
            return counter -1;
        default :
            return counter;
    }
}