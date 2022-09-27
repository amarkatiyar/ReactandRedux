const posdata2 =[];

export const apidata2 = (state=posdata2,action)=>{
    switch(action.type){
        case "FetchData2": return state= action.payload;    
        default: return state;
    }
}

// const userObj={}
export const apiReducer  = (state={},action)=>{
        switch (action.type){
        case "ADD_USER " : 
            const users = state.users.concat(action.payload)
            return {...state, users}
        default: return state;
    }
}