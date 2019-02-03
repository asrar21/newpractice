
const redux=require('redux');

const createStore=redux.createStore
const initialstate={
    count:0
}
//reducer

const rootreducer=(state=initialstate,action)=>{

    if(action.type==='INC'){
        return{
            ...state,
            count:state.count+1
        }

    }
    if(action.type==='ADD'){
        return{
            ...state,
            count:state.count+action.value
        }

    }
    return state;

}
//store
const store=createStore(rootreducer);
console.log(store.getState());
//subscription

store.subscribe(()=>{
    console.log('[subscription]',store.getState())
})
//dispatching action
store.dispatch({type:'INC'});
store.dispatch({type:'ADD',value:11})
console.log(store.getState())
