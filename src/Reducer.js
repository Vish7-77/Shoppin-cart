import  {createReducer} from "@reduxjs/toolkit" 

const initialState ={
    cn:0
}



export const  customReducer =createReducer(initialState,{
inc:(state)=>{
    state.cn+=1;
},
dec:(state)=>{
    state.cn-=1;
}

})