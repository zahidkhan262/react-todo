import { INCREMENT,DECREMENT } from "./CounterType"
const initialState={
    count:0
}

const CounterReducer=(state=initialState,action)=>{

    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count<20? state.count +1 :state.count
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count>2 ? state.count -1 :state.count
            }
            default : return state
    }
}
export default CounterReducer