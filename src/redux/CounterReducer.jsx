import { INCREMENT,DECREMENT } from "./CounterType"
const initialState=0;
// str.trim().length !== 0

const CounterReducer=(state=initialState,action)=>{

    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - action.payload;

            default : return state
    }
}
export default CounterReducer
