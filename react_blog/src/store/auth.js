import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userdata:null
}
const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userdata=action.payload.userdata
        },
        logout:(state,action)=>{
            state.status=false;
            state.userdata=null;
        }
        
    }
})

export const authReducer= authSlice.reducer
export const {login,logout}=authSlice.actions