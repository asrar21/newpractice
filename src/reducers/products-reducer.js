import * as actions from './actions';
const initialState={
    count:0,
    results:[]
}


export default function product(state=initialState,action){
    if(actions.INC){
        return {
            ...state,
            count:state.count+1
        }
    }
    if(actions.DEC){
        return {
            ...state,
            count:state.count-action.val
        }
    }
    if(actions.RESULT){
        return{
            results:state.results.concat(state.count)
        }
    }
    return state;
}