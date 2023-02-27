

const initialState={
    count:5,
  
}

const reducer=(state=initialState,action)=>{

    const newState={...state};
    if(action.type==='ADD')
    {
        ++newState.count
    }
    if(action.type==='SUBSTRACT')
    {
        --newState.count
    }
return newState;
}

export default reducer;